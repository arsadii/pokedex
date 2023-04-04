/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetAllPokemon($take: Int) {\n    getAllPokemon(take: $take) {\n      backSprite\n      baseForme\n      baseSpecies\n      baseStatsTotal\n      bulbapediaPage\n      color\n      cosmeticFormes\n      eggGroups\n      evolutionLevel\n      forme\n      formeLetter\n      height\n      key\n      num\n      shinyBackSprite\n      species\n      sprite\n      types {\n        name\n      }\n    }\n  }\n": types.GetAllPokemonDocument,
    "\n  query GetPokemon($pokemon: PokemonEnum!) {\n    getPokemon(pokemon: $pokemon) {\n      baseForme\n      baseSpecies\n      abilities {\n        first {\n          name\n          desc\n          bulbapediaPage\n          pokemonThatHaveThisAbility {\n            sprite\n            species\n            types {\n              name\n            }\n          }\n        }\n        hidden {\n          bulbapediaPage\n          desc\n          name\n          pokemonThatHaveThisAbility {\n            sprite\n            species\n            types {\n              name\n            }\n          }\n        }\n        second {\n          bulbapediaPage\n          desc\n          name\n          pokemonThatHaveThisAbility {\n            sprite\n            species\n            types {\n              name\n            }\n          }\n        }\n        special {\n          desc\n          name\n          bulbapediaPage\n          pokemonThatHaveThisAbility {\n            sprite\n            species\n            types {\n              name\n            }\n          }\n        }\n      }\n      baseStats {\n        attack\n        defense\n        hp\n        specialattack\n        specialdefense\n        speed\n      }\n      catchRate {\n        percentageWithOrdinaryPokeballAtFullHealth\n        base\n      }\n      color\n      cosmeticFormes\n      eggGroups\n      evYields {\n        attack\n        defense\n        hp\n        specialattack\n        specialdefense\n        speed\n      }\n      evolutionLevel\n      evolutions {\n        sprite\n        species\n        types {\n          name\n        }\n      }\n      flavorTexts {\n        flavor\n        game\n      }\n      forme\n      formeLetter\n      gender {\n        female\n        male\n      }\n      height\n      isEggObtainable\n      key\n      levellingRate\n      preevolutions {\n        species\n        sprite\n        types {\n          name\n        }\n      }\n      shinyBackSprite\n      shinySprite\n      species\n      sprite\n      types {\n        name\n      }\n      weight\n    }\n  }\n": types.GetPokemonDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllPokemon($take: Int) {\n    getAllPokemon(take: $take) {\n      backSprite\n      baseForme\n      baseSpecies\n      baseStatsTotal\n      bulbapediaPage\n      color\n      cosmeticFormes\n      eggGroups\n      evolutionLevel\n      forme\n      formeLetter\n      height\n      key\n      num\n      shinyBackSprite\n      species\n      sprite\n      types {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllPokemon($take: Int) {\n    getAllPokemon(take: $take) {\n      backSprite\n      baseForme\n      baseSpecies\n      baseStatsTotal\n      bulbapediaPage\n      color\n      cosmeticFormes\n      eggGroups\n      evolutionLevel\n      forme\n      formeLetter\n      height\n      key\n      num\n      shinyBackSprite\n      species\n      sprite\n      types {\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPokemon($pokemon: PokemonEnum!) {\n    getPokemon(pokemon: $pokemon) {\n      baseForme\n      baseSpecies\n      abilities {\n        first {\n          name\n          desc\n          bulbapediaPage\n          pokemonThatHaveThisAbility {\n            sprite\n            species\n            types {\n              name\n            }\n          }\n        }\n        hidden {\n          bulbapediaPage\n          desc\n          name\n          pokemonThatHaveThisAbility {\n            sprite\n            species\n            types {\n              name\n            }\n          }\n        }\n        second {\n          bulbapediaPage\n          desc\n          name\n          pokemonThatHaveThisAbility {\n            sprite\n            species\n            types {\n              name\n            }\n          }\n        }\n        special {\n          desc\n          name\n          bulbapediaPage\n          pokemonThatHaveThisAbility {\n            sprite\n            species\n            types {\n              name\n            }\n          }\n        }\n      }\n      baseStats {\n        attack\n        defense\n        hp\n        specialattack\n        specialdefense\n        speed\n      }\n      catchRate {\n        percentageWithOrdinaryPokeballAtFullHealth\n        base\n      }\n      color\n      cosmeticFormes\n      eggGroups\n      evYields {\n        attack\n        defense\n        hp\n        specialattack\n        specialdefense\n        speed\n      }\n      evolutionLevel\n      evolutions {\n        sprite\n        species\n        types {\n          name\n        }\n      }\n      flavorTexts {\n        flavor\n        game\n      }\n      forme\n      formeLetter\n      gender {\n        female\n        male\n      }\n      height\n      isEggObtainable\n      key\n      levellingRate\n      preevolutions {\n        species\n        sprite\n        types {\n          name\n        }\n      }\n      shinyBackSprite\n      shinySprite\n      species\n      sprite\n      types {\n        name\n      }\n      weight\n    }\n  }\n"): (typeof documents)["\n  query GetPokemon($pokemon: PokemonEnum!) {\n    getPokemon(pokemon: $pokemon) {\n      baseForme\n      baseSpecies\n      abilities {\n        first {\n          name\n          desc\n          bulbapediaPage\n          pokemonThatHaveThisAbility {\n            sprite\n            species\n            types {\n              name\n            }\n          }\n        }\n        hidden {\n          bulbapediaPage\n          desc\n          name\n          pokemonThatHaveThisAbility {\n            sprite\n            species\n            types {\n              name\n            }\n          }\n        }\n        second {\n          bulbapediaPage\n          desc\n          name\n          pokemonThatHaveThisAbility {\n            sprite\n            species\n            types {\n              name\n            }\n          }\n        }\n        special {\n          desc\n          name\n          bulbapediaPage\n          pokemonThatHaveThisAbility {\n            sprite\n            species\n            types {\n              name\n            }\n          }\n        }\n      }\n      baseStats {\n        attack\n        defense\n        hp\n        specialattack\n        specialdefense\n        speed\n      }\n      catchRate {\n        percentageWithOrdinaryPokeballAtFullHealth\n        base\n      }\n      color\n      cosmeticFormes\n      eggGroups\n      evYields {\n        attack\n        defense\n        hp\n        specialattack\n        specialdefense\n        speed\n      }\n      evolutionLevel\n      evolutions {\n        sprite\n        species\n        types {\n          name\n        }\n      }\n      flavorTexts {\n        flavor\n        game\n      }\n      forme\n      formeLetter\n      gender {\n        female\n        male\n      }\n      height\n      isEggObtainable\n      key\n      levellingRate\n      preevolutions {\n        species\n        sprite\n        types {\n          name\n        }\n      }\n      shinyBackSprite\n      shinySprite\n      species\n      sprite\n      types {\n        name\n      }\n      weight\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;