import React from "react";
import {
  Button as CButton,
  ButtonProps as CButtonProps,
} from "@chakra-ui/react";
import Styles from "./Button.module.scss";

type ButtonProps = CButtonProps;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <CButton backgroundColor={"rad"} className={Styles["btn"]} {...props}>
      {children}
    </CButton>
  );
};

export default Button;
