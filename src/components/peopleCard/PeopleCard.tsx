import React from "react";
import styled from "styled-components";
import { PeopleCardProps } from "./types";
import { hairColorMap } from "./constants";
import {
  BracketBox,
  BracketBoxContainer,
  CardButton,
  SciFiPanel,
  SciFiPanelContent,
  SciFiPanelHeader
} from "./styles";
import { IPlanet } from "@api/types";
import { PlanetLogo } from "@components/planet/PlanetLogo";
import { planetColorMap } from "@components/planet/constants";

// const Card = styled.div`
//   border: 1px solid #ccc;
//   padding: 1rem;
//   margin-bottom: 1rem;
// `;

const Card = styled.div`
  flex: 1 0 auto;
  padding: 1rem;
  background-color: lightgray;
  border: 1px solid gray;
  z-index: 9;
  color: black;
  border-radius: 1rem;
  @media (min-width: 768px) {
    /* Adjust breakpoint as needed */
    flex: 0 0 25%; /* Adjust width for larger screens */
  }
`;

const CardTitle = styled.h2`text-align: center;`;

const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const CardItem = styled.div`flex: 1 0 200px;`;

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
    films,
    species,
    vehicles,
    starships,
    homeworld
  } =
    character || {};

  const { name: homeworldName } = (homeworld as IPlanet) || {};
  return (
    <BracketBoxContainer>
      <BracketBox>
        <SciFiPanelHeader title={`Name: ${name}`}>{name}</SciFiPanelHeader>
        <div>
          <CardItem>
            Height: {height}
          </CardItem>
          <CardItem>
            Mass: {mass}
          </CardItem>

          <CardItem>
       
            Homeworld: {homeworldName}
            {homeworldName && <>
              <PlanetLogo planetData={planetColorMap[homeworldName]} />
            </>}
          </CardItem>

          <CardButton>More Details</CardButton>
          <CardItem>
            Hair Color:
            <div
              style={{
                height: 16,
                width: 16,
                display: "inline-block",
                borderRadius: "50%",
                backgroundColor: hairColorMap[hair_color]
              }}
            />
            {hair_color}
          </CardItem>
          <CardItem>
            Skin Color:{" "}
            <div
              style={{
                height: 16,
                width: 16,
                display: "inline-block",
                borderRadius: "50%",
                backgroundColor: character.skin_color || "transparent"
              }}
            />{" "}
            {character.skin_color}
          </CardItem>
          <CardItem>
            Eye Color:
            <div
              style={{
                height: 16,
                width: 16,
                display: "inline-block",
                borderRadius: "50%",
                backgroundColor: character.eye_color || "transparent"
              }}
            />
            {character.eye_color}
          </CardItem>
          <CardItem>
            Birth Year: {character.birth_year}
          </CardItem>

          {/* Add more card items as needed */}
        </div>
        More Details:
        <CardItem>Gender: {character.gender}</CardItem>
        <CardItem>Height: {character.height}cm.</CardItem>
        <CardItem>Mass: {character.mass}kg</CardItem>
        <CardItem>Hair Color: {character.hair_color}</CardItem>
        <CardItem>Skin Color: {character.skin_color}</CardItem>
        <CardItem>Eye Color: {character.eye_color}</CardItem>
        <CardItem>Birth Year: {character.birth_year}</CardItem>
        <CardItem>Gender: {character.gender}</CardItem>
        <CardItem>Films: {character.films.join(", ")}</CardItem>
        <CardItem>Species: {character.species.join(", ")}</CardItem>
        <CardItem>Vehicles: {character.vehicles.join(", ")}</CardItem>
        <CardItem>Starships: {character.starships.join(", ")}</CardItem>
        <CardItem>URL: {character.url}</CardItem>
      </BracketBox>
    </BracketBoxContainer>
  );
};

export default PeopleCard;
