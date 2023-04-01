import React from "react";
import { Text as CText, TextProps as CTextProps } from "@chakra-ui/react";
import Styles from "./Text.module.scss";

type TextProps = CTextProps;

const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <CText
      {...props}
      className={Styles["text"]}
      style={{ fontFamily: "roboto, sans-serif" }}
    >
      {children}
    </CText>
  );
};

export default Text;
