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

const useGetAllPokemonQuery = (take: number, keyword?: string) => {
  return useQuery({
    queryKey: ["getAllPokemon", take],
    queryFn: async () =>
      await request(import.meta.env.VITE_API_BASE_URL, getAllPokemon, {
        take: take,
      }),
    enabled: !keyword,
  });
};

export default useGetAllPokemonQuery;
