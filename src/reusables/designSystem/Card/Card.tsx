import React from "react";
import { Card as CCard, CardProps as CCardProps } from "@chakra-ui/react";
import Styles from "./Card.module.scss";

type CardProps = CCardProps;

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <CCard p={"4"} className={Styles["container"]} {...props}>
      {children}
    </CCard>
  );
};

export default Card;
