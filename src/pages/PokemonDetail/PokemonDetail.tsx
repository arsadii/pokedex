import React from "react";
import { useParams } from "react-router-dom";
import Styles from "./PokemonDetail.module.scss";
import usePokemonDetailByKey from "./hooks/usePokemonDetailByKey";
import { Abilities, PokemonEnum } from "src/gql/graphql";
import Heading from "src/reusables/designSystem/Heading/Heading";
import Text from "src/reusables/designSystem/Text/Text";
import PokemonAbilities from "./components/PokemonAbilities";
import { Flex, Grid, GridItem, List, ListItem } from "@chakra-ui/react";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";

const PokemonDetail: React.FC = () => {
  const { key } = useParams();

  const { data } = usePokemonDetailByKey(key as PokemonEnum);

  return (
    <div className={Styles["container"]}>
      <div className={Styles["first-info"]}>
        <Heading size={"2xl"}>{data?.getPokemon.species}</Heading>
        <img src={data?.getPokemon.sprite} alt="" />
        <div className={Styles["description-wrapper"]}>
          <div className={Styles["description"]}>
            <Heading size={"sm"}>Base Species :</Heading>
            <Text>{data?.getPokemon.baseSpecies ?? "-"}</Text>
          </div>
          <div className={Styles["description"]}>
            <Heading size={"sm"}>Types :</Heading>
            <Text>
              {data?.getPokemon.types.map((type) => type.name).join(", ") ??
                "-"}
            </Text>
          </div>
          <div className={Styles["description"]}>
            <Heading size={"sm"}>Weight :</Heading>
            <Text>{data?.getPokemon.weight ?? "-"}</Text>
          </div>
          <div className={Styles["description"]}>
            <Heading size={"sm"}>Egg Groups :</Heading>
            <Text>{data?.getPokemon.eggGroups?.join(", ") ?? "-"} </Text>
          </div>
        </div>
      </div>
      <div className={Styles["second-info"]}>
        <div className="">
          <Heading size={"md"}>Abilities : </Heading>
          <PokemonAbilities ability={data?.getPokemon.abilities as Abilities} />
        </div>
        <Grid templateColumns={"repeat(2, 1fr)"}>
          <GridItem>
            <Heading size={"md"}>Base Stats : </Heading>
            <List>
              <ListItem>
                <Flex alignItems={"center"} gap={".5rem"}>
                  <RiIcons.RiSwordLine /> Attack :{" "}
                  {data?.getPokemon?.baseStats?.attack}
                </Flex>
              </ListItem>
              <ListItem>
                <Flex alignItems={"center"} gap={".5rem"}>
                  <BsIcons.BsShieldShaded /> Defense :
                  {data?.getPokemon?.baseStats?.defense}
                </Flex>
              </ListItem>
              <ListItem>
                <Flex alignItems={"center"} gap={".5rem"}>
                  <MdIcons.MdBloodtype /> HP :{data?.getPokemon?.baseStats?.hp}
                </Flex>
              </ListItem>
              <ListItem>
                <Flex alignItems={"center"} gap={".5rem"}>
                  <GiIcons.GiCrossedSwords /> Special Attack :
                  {data?.getPokemon?.baseStats?.specialattack}
                </Flex>
              </ListItem>
              <ListItem>
                <Flex alignItems={"center"} gap={".5rem"}>
                  <GiIcons.GiArrowsShield /> Special Defense :
                  {data?.getPokemon?.baseStats?.specialdefense}
                </Flex>
              </ListItem>
              <ListItem>
                <Flex alignItems={"center"} gap={".5rem"}>
                  <RiIcons.RiTimerFlashFill /> Speed :
                  {data?.getPokemon?.baseStats?.speed}
                </Flex>
              </ListItem>
            </List>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
};

export default PokemonDetail;
