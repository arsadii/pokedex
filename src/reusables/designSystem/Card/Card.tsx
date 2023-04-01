import React from "react";
import {
  Card as CCard,
  CardProps as CCardProps,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Styles from "./Card.module.scss";

type CardProps = CCardProps;

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <GridItem>
        <CCard {...props} p={"4"} className={Styles["container"]}>
          {children}
        </CCard>
      </GridItem>
    </Grid>
  );
};

export default Card;
