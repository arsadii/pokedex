import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { Abilities } from "src/gql/graphql";
import Heading from "src/reusables/designSystem/Heading/Heading";

type PokemonAbilitiesProps = {
  ability: Abilities;
};

const PokemonAbilities: React.FC<PokemonAbilitiesProps> = ({ ability }) => {
  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
      w={"100%"}
      gap={23}
      marginTop={"1rem"}
    >
      <Box>
        <Flex direction={"column"}>
          <Heading size={"sm"}>First </Heading>
          <Text fontWeight={600} fontSize={24}>
            {ability?.first?.name}
          </Text>
          <Text opacity={"0.7"}>{ability?.first?.desc}</Text>
        </Flex>
      </Box>
      <Box>
        <Flex direction={"column"}>
          <Heading size={"sm"}>Second </Heading>
          <Text fontWeight={600} fontSize={24}>
            {ability?.second?.name ?? "-"}
          </Text>
          <Text opacity={"0.7"}>{ability?.second?.desc ?? "-"}</Text>
        </Flex>
      </Box>
      <Box>
        <Flex direction={"column"}>
          <Heading size={"sm"}>Hidden </Heading>
          <Text fontWeight={600} fontSize={24}>
            {ability?.hidden?.name ?? "-"}
          </Text>
          <Text opacity={"0.7"}>{ability?.hidden?.desc ?? "-"}</Text>
        </Flex>
      </Box>
      <Box>
        <Flex direction={"column"}>
          <Heading size={"sm"}>Special </Heading>
          <Text fontWeight={600} fontSize={24}>
            {ability?.special?.name ?? "-"}
          </Text>
          <Text opacity={"0.7"}>{ability?.special?.desc ?? "-"}</Text>
        </Flex>
      </Box>
    </Grid>
  );
};

export default PokemonAbilities;
