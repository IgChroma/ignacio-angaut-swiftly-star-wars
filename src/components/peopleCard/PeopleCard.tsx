import React, { useState } from "react";
import { PeopleCardProps } from "./types";
import { hairColorMap } from "./constants";
import {
  BracketBox,
  BracketBoxContainer,
  CardButton,
  SciFiPanelHeader,
  PeopleCardItem,
  ApperanceDotIndicator,
  PlanetContainer,
  ShowMoreSection
} from "./styles";
import { IPlanet, ISpecie } from "@api/types";
import { PlanetLogo } from "@components/planet/PlanetLogo";
import { planetColorMap } from "@components/planet/constants";
import SpecieSubHeader from "./SpecieSubHeader";
import { SpaceShipSvg } from "./SpecieIcons";

// Note, this are not only people but robots or aliens as well
// We should initiate a request for product to redefine this entity and reflect it in a code iteration
const PeopleCard: React.FC<PeopleCardProps> = ({ character }) => {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    species = [],
    starships,
    homeworld
  } =
    character || {};

    const { name: homeworldName } = (homeworld as IPlanet) || {};

  const [showMore, setShowMore] = useState(false);
  
  const specieNames = (species as ISpecie[])?.map(specie => specie?.name);


  return (
    <BracketBoxContainer>
      <BracketBox>
        <SciFiPanelHeader title={`Name: ${name}`}>{name}</SciFiPanelHeader>

        <SpecieSubHeader specieNames={specieNames}></SpecieSubHeader>

        <div>
          <PeopleCardItem>
            Height: {height !== "unknown" ? `${height}cm`: height}
          </PeopleCardItem>
            Mass: {mass !== "unknown" ? `${mass}kg`: mass}
          <PeopleCardItem>
          </PeopleCardItem>
          <PeopleCardItem>Gender: {gender}</PeopleCardItem>
          <PeopleCardItem>Birth Year: {birth_year}</PeopleCardItem>

          <PeopleCardItem>       
            Homeworld: <span style={{color:planetColorMap[homeworldName]?.color }}>{homeworldName}</span>
            {homeworldName && 
              <PlanetContainer title={homeworldName}>
                <PlanetLogo planetData={planetColorMap[homeworldName]} />
              </PlanetContainer>
            }
          </PeopleCardItem>

          <CardButton onClick={()=>setShowMore(!showMore)}>More Details</CardButton>
        </div>

        {showMore && <ShowMoreSection>
          Extended Details:
          <PeopleCardItem>
            Hair Color:
            <ApperanceDotIndicator style={{               
               backgroundColor: hairColorMap[hair_color]
             }}/>      
            {hair_color}
          </PeopleCardItem>
          <PeopleCardItem>
            Skin Color:{" "}
          <ApperanceDotIndicator style={{               
               backgroundColor: skin_color || "transparent"
            }} />            
            {character.skin_color}
          </PeopleCardItem>
          <PeopleCardItem>
            Eye Color:
            <ApperanceDotIndicator style={{               
               backgroundColor: eye_color || "transparent"
            }} />
            {character.eye_color}
          </PeopleCardItem>
          {starships && starships.length>0 && <PeopleCardItem>
            Starships: {starships.map((d) => <SpaceShipSvg key={(d as string)} />)}
          </PeopleCardItem>
          }
        </ShowMoreSection>}
    

      </BracketBox>
    </BracketBoxContainer>
  );
};

export default PeopleCard;
