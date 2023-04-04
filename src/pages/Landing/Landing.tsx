import React, { useState } from "react";
import Styles from "./Landing.module.scss";
import Heading from "src/reusables/designSystem/Heading/Heading";
import Text from "src/reusables/designSystem/Text/Text";
import PokedexList from "./components/PokemonList/PokemonList";
import { Input } from "@chakra-ui/react";
import { useDebouncedCallback } from "use-debounce";

const Landing: React.FC = () => {
  const [keyword, setKeyword] = useState<string>();

  const handleSearch = useDebouncedCallback((value) => {
    setKeyword(value);
  }, 500);

  return (
    <main className={Styles["landing"]}>
      <div className={Styles["hero"]}>
        <Heading size={"4xl"}>Pokedex</Heading>
        <Text fontSize={"2xl"}>Catch your Pokemon</Text>
        <Input
          color={"white"}
          marginTop={"1rem"}
          width={"50%"}
          placeholder="Search pokemon name"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <PokedexList keyword={keyword} />
    </main>
  );
};

export default Landing;
