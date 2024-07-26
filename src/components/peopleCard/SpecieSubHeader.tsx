 import React from "react";
import { SpecieSubHeaderDiv } from "./styles";
import { AlienSVG, DroidSVG, PersonSVG } from "./SpecieIcons";

export const SpecieSubHeader = ({ specieNames }: { specieNames: string[] }) => {
  const specie =
    specieNames.length == 0
      ? "Human"
      : specieNames.length === 1 ? specieNames[0] : specieNames.join(", ");

  const isHuman = specie === "Human";
  const isDroid = specie === "Droid";
  const color = isDroid
    ? "rgb(255 237 89)"
    : isHuman ? "#fff" : "rgb(76, 175, 80)";
  const SpecieIcon = isHuman ? PersonSVG : isDroid ? DroidSVG : AlienSVG;

  return (
    <SpecieSubHeaderDiv style={{ color: color }} title={`Specie: ${specie}`}>
      <SpecieIcon/> {specie}
    </SpecieSubHeaderDiv>
  );
};

export default SpecieSubHeader;
