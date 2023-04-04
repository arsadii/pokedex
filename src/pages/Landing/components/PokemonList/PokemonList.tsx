import { Grid, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useGetAllPokemonQuery from "../../hooks/useGetAllPokemonQuery";
import PokemonCard from "../PokemonCard";
import { Pokemon } from "src/gql/graphql";
import Button from "src/reusables/designSystem/Button/Button";
import Styles from "./PokemonList.module.scss";
import useGetFuzzyPokemon from "../../hooks/useGetFuzzyPokemon";

type PokemonListProps = {
  keyword?: string;
};

const PokemonList: React.FC<PokemonListProps> = ({ keyword }) => {
  const [take, setTake] = useState<number>(10);
  const [currentPokemons, setCurrentPokemons] = useState<Pokemon[]>();

  const { data, isLoading } = useGetAllPokemonQuery(take, keyword);

  const { data: searchData, isLoading: searchLoading } = useGetFuzzyPokemon(
    take,
    keyword
  );

  useEffect(() => {
    if (keyword?.length) {
      if (searchData?.getFuzzyPokemon) {
        setCurrentPokemons(searchData?.getFuzzyPokemon as Pokemon[]);
      }
    } else {
      if (data?.getAllPokemon) {
        setCurrentPokemons(data?.getAllPokemon as Pokemon[]);
      }
    }
  }, [data, searchData, keyword]);

  const handlePaginate = () => {
    setTake(take + 10);
  };

  if ((isLoading || searchLoading) && !currentPokemons?.length) {
    return <Spinner />;
  }

  return (
    <div className={Styles["container"]}>
      <Grid
        templateColumns={[
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
          "repeat(5, 1fr)",
        ]}
        gap={6}
      >
        {currentPokemons?.map((pokemon) => {
          return (
            <PokemonCard key={pokemon.key} pokemonData={pokemon as Pokemon} />
          );
        })}
      </Grid>
      <Button
        isLoading={isLoading}
        onClick={handlePaginate}
        backgroundColor={"rad"}
        className={Styles["btn"]}
      >
        Load more
      </Button>
    </div>
  );
};

export default PokemonList;
