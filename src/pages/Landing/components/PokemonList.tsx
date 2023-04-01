import { Grid } from "@chakra-ui/react";
import React from "react";
import useGetAllPokemonQuery from "../hooks/useGetAllPokemonQuery";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "src/gql/graphql";

const PokemonList: React.FC = () => {
  const { data } = useGetAllPokemonQuery();

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {data?.getAllPokemon.map((pokemon) => {
        return <PokemonCard pokemonData={pokemon as Pokemon} />;
      })}
    </Grid>
  );
};

export default PokemonList;
