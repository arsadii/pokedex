import React from "react";
import { Pokemon } from "src/gql/graphql";
import Card from "src/reusables/designSystem/Card/Card";
import Heading from "src/reusables/designSystem/Heading/Heading";
import Styles from "./PokemonCard.module.scss";
import Text from "src/reusables/designSystem/Text/Text";
import { NavLink } from "react-router-dom";

type PokemonCardProps = {
  pokemonData: Pokemon;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonData }) => {
  return (
    <Card
      backgroundColor={"dark"}
      key={pokemonData.key}
      className={Styles["container"]}
    >
      <img src={pokemonData.sprite} alt="" />
      <Heading textAlign={"center"} size={"md"}>
        {pokemonData.species}
      </Heading>
      <Text textAlign={"center"}>
        Types : {pokemonData.types.map((type) => type.name).join(", ")}
      </Text>
      <NavLink
        className={Styles["detail-link"]}
        to={`/detail/${pokemonData.key}`}
      >
        See details
      </NavLink>
    </Card>
  );
};

export default PokemonCard;
