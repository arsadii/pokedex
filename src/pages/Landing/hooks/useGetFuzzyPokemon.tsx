import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";

import { graphql } from "src/gql";

const getFuzzyPokemon = graphql(`
  query GetFuzzyPokemon($pokemon: String!, $take: Int) {
    getFuzzyPokemon(pokemon: $pokemon, take: $take) {
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

const useGetFuzzyPokemon = (take: number, keyword?: string) => {
  return useQuery({
    queryKey: ["getFuzzyPokemon", take],
    queryFn: async () =>
      await request(import.meta.env.VITE_API_BASE_URL, getFuzzyPokemon, {
        take: take,
        pokemon: keyword ?? "",
      }),
    enabled: !!keyword,
  });
};

export default useGetFuzzyPokemon;
