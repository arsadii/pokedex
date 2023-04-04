import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { graphql } from "src/gql";
import { PokemonEnum } from "src/gql/graphql";

const getPokemonDetailByNum = graphql(`
  query GetPokemon($pokemon: PokemonEnum!) {
    getPokemon(pokemon: $pokemon) {
      baseForme
      baseSpecies
      abilities {
        first {
          name
          desc
          bulbapediaPage
          pokemonThatHaveThisAbility {
            sprite
            species
            types {
              name
            }
          }
        }
        hidden {
          bulbapediaPage
          desc
          name
          pokemonThatHaveThisAbility {
            sprite
            species
            types {
              name
            }
          }
        }
        second {
          bulbapediaPage
          desc
          name
          pokemonThatHaveThisAbility {
            sprite
            species
            types {
              name
            }
          }
        }
        special {
          desc
          name
          bulbapediaPage
          pokemonThatHaveThisAbility {
            sprite
            species
            types {
              name
            }
          }
        }
      }
      baseStats {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      catchRate {
        percentageWithOrdinaryPokeballAtFullHealth
        base
      }
      color
      cosmeticFormes
      eggGroups
      evYields {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      evolutionLevel
      evolutions {
        sprite
        species
        types {
          name
        }
      }
      flavorTexts {
        flavor
        game
      }
      forme
      formeLetter
      gender {
        female
        male
      }
      height
      isEggObtainable
      key
      levellingRate
      preevolutions {
        species
        sprite
        types {
          name
        }
      }
      shinyBackSprite
      shinySprite
      species
      sprite
      types {
        name
      }
      weight
    }
  }
`);

const usePokemonDetailByKey = (key: PokemonEnum) => {
  return useQuery({
    queryKey: ["getPokemonDetailByNum", key],
    queryFn: async () =>
      await request(import.meta.env.VITE_API_BASE_URL, getPokemonDetailByNum, {
        pokemon: key,
      }),
  });
};

export default usePokemonDetailByKey;
