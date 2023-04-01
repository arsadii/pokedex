import React from "react";
import Styles from "./Landing.module.scss";
import Heading from "src/reusables/designSystem/Heading/Heading";
import Text from "src/reusables/designSystem/Text/Text";

const Landing: React.FC = () => {
  return (
    <main className={Styles["app"]}>
      <Heading>Ini Heading</Heading>
      <Text>Ini text</Text>
    </main>
  );
};

export default Landing;
