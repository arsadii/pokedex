import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";

import { graphql } from "src/gql";

const getAllPokemon = graphql(`
  query GetAllPokemon($take: Int) {
    getAllPokemon(take: $take) {
      backSprite
      baseForme
      baseSpecies
      baseStatsTotal
      bulbapediaPage
      color
      cosmeticFormes
      eggGroups
      evolutionLevel
      forme
      formeLetter
      height
      key
      num
      shinyBackSprite
      species
      sprite
      types {
        name
      }
    }
  }
`);

const useGetAllPokemonQuery = () => {
  return useQuery({
    queryKey: ["getAllPokemon"],
    queryFn: async () =>
      await request(import.meta.env.VITE_API_BASE_URL, getAllPokemon, {
        take: 10,
      }),
  });
};

export default useGetAllPokemonQuery;
