import styled,  { keyframes } from 'styled-components';
import { SWIFTLY_BLUE } from '../peopleList/styles';

const tiltAnimation = keyframes`
  0% {
    transform: rotateX(0deg);
  }
  25% {
    transform: rotateX(5deg);
  }
  50% {
    transform: rotateX(0deg);
  }
  75% {
    transform: rotateX(-5deg);
  }
  100% {
    transform: rotateX(0deg);
  }
`;

export const ShowMoreSection = styled.div`
  margin-top: 1rem;
  font-size: small;
`;

export const PeopleCardItem = styled.div`
flex: 1 0 200px;
  vertical-align: middle;
`;

export const ApperanceDotIndicator = styled.div`
  height: 16px;
  width: 16px;
  display: inline-block;
  border-radius: 50%;
  margin: 0 4px;
 `;

export const PlanetContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  height: 64px;
  animation: ${tiltAnimation} 5s infinite;
`

export const SciFiPanelHeader = styled.h2`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.75);
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.95);
  /*background: ${SWIFTLY_BLUE};*/
  background: linear-gradient(90deg, transparent, ${SWIFTLY_BLUE}, transparent);
  text-align: center;
  text-transform: capitalize;
  margin: 8px;
  padding: 5px;
  order: 1;
`;

export const SpecieSubHeaderDiv = styled.h2`
  text-decoration: none;
  color: rgba(192, 251, 63, 0.75);
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.95);
  background: linear-gradient(90deg, transparent, ${SWIFTLY_BLUE}, transparent);
  text-align: center;
  text-transform: capitalize;
  margin: 4px 8px 12px;
  opacity: 0.9;
  padding: 2px;
  order: 1;
  transition: outline 2s;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
`;

export const CardButton = styled.button`
font-size: 0.75em;
letter-spacing: 0.05em;
text-transform: uppercase;
color: white;
margin-top: 0.5rem;
padding: 0.5em 1em;
border: 1px solid white;
border-radius: 4px;
background-color: transparent;
box-shadow: 0 0 8px 2px red), inset 0 0 8px 2px red;
cursor: pointer;
`;

export const BracketBoxContainer = styled.div`

  flex: 1 0 25%;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  max-width: 24rem;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid white;
  border-radius: 2px;
  position: relative;
  background-color: transparent;
  overflow: hidden;
  box-shadow: 0 0 8px 2px #435c7f, inset 0 0 8px 2px #435c7f;

  ::before,
  ::after {
    content: "";
    opacity: 0.7;
    width: calc(100% + 18px);
    height: 10px;
    border: 1px solid #ecf4fe;
    border-radius: 1px;
    position: absolute;
    left: -9px;
  }

  ::before {
    border-bottom: none;
    top: -12px;
    transform: perspective(45px) rotateX(8deg);
  }

  ::after {
    border-top: none;
    bottom: -12px;
    transform: perspective(45px) rotateX(-8deg);   

  }

    /* Logic for the flexbox since we are not using any other library or toolkit for the grid layout*/
    @media only screen and (max-width: 500px) {
        flex: 1 0 calc(100% - 4rem);
    }

    @media only screen and (min-width: 500.1x) and (max-width: 768px) {
        flex: 1 0 50%;
    }

    @mediaonly screen and (min-width: 768.1x) and (max-width: 1200px) {
        flex: 1 0 33.33%;
    }
`;

export const BracketBox = styled.div`
  margin: 0.5rem;

  ${BracketBoxContainer}
  background-color: grey;

  &.c-bracket-box--multi {
    ${BracketBoxContainer} {
      &:not(:last-child)::after {
        height: 9px;
        border-right: none;
        border-bottom: none;
        left: 50%;
        bottom: -14px;
        transform: none;
      }

      &:nth-child(1n + 2)::before {
        width: 9px;
        left: calc(50% - 4px);
        border-right: none;
        border-left: none;
        top: -9px;
        transform: none;
      }
    }
  }
`;
