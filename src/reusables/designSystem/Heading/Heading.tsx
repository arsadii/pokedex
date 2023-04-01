import React from "react";
import {
  Heading as CHeading,
  HeadingProps as CHeadingProps,
} from "@chakra-ui/react";
import Styles from "./Heading.module.scss";

type HeadingProps = CHeadingProps;

const Heading: React.FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <CHeading {...props} className={Styles["heading"]}>
      {children}
    </CHeading>
  );
};

export default Heading;
