import React from "react";
import Styles from "./Landing.module.scss";
import Heading from "src/reusables/designSystem/Heading/Heading";
import Text from "src/reusables/designSystem/Text/Text";
import PokedexList from "./components/PokemonList";

const Landing: React.FC = () => {
  return (
    <main className={Styles["landing"]}>
      <div className={Styles["hero"]}>
        <Heading size={"4xl"}>Pokedex</Heading>
        <Text fontSize={"2xl"}>Catch your Pokemon</Text>
      </div>
      <PokedexList />
    </main>
  );
};

export default Landing;
