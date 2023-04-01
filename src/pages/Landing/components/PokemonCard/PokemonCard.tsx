import React from "react";
import { Pokemon } from "src/gql/graphql";
import Card from "src/reusables/designSystem/Card/Card";
import Heading from "src/reusables/designSystem/Heading/Heading";
import Styles from "./PokemonCard.module.scss";
import Text from "src/reusables/designSystem/Text/Text";

type PokemonCardProps = {
  pokemonData: Pokemon;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonData }) => {
  return (
    <Card key={pokemonData.key} className={Styles["container"]}>
      <img src={pokemonData.sprite} alt="" />
      <Heading size={"md"}>{pokemonData.species}</Heading>
      <Text>
        Types : {pokemonData.types.map((type) => type.name).join(", ")}
      </Text>
    </Card>
  );
};

export default PokemonCard;