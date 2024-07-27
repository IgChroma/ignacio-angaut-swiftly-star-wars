import React, { FC } from "react";
import SwiftlyLogo from "@style/SwiftlyLogo";
import {
  StarWarsTitle,
  SwiftlyLogoWrapper
} from "@components/peopleList/styles";

export const MainTitle: FC = () => {
  return (
    <StarWarsTitle className="starWarsFont">
      Star Wars Challenge
      <SwiftlyLogoWrapper>
        <SwiftlyLogo width="300px" />
      </SwiftlyLogoWrapper>
    </StarWarsTitle>
  );
};

export default MainTitle;
