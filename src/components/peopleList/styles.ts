import styled from 'styled-components';


export const SWIFTLY_BLUE = "#405c80";
export const StarWarsTitle = styled.h1`
  color: white;
  font-family: starWarsFont;
  font-size: 50px;

  border-radius: 18px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
    @media (min-width: 1030px) {
            justify-content: space-between;
            display: flex;
            align-items: center;
            padding: 0 1rem;
      }

      &:hover {
        color: #ffe618;
        transition: 2s;
        cursor: crosshair;
    }
  }
`;

export const CharacterListContainer = styled.div`
  	display: flex;
  	-webkit-flex-flow: row wrap;
  	justify-content: space-between;
`;

export const SwiftlyLogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    @media (min-width: 1030px) {
      justify-content: inherit;
      display: inline;
      margin-top: 0.75rem;
    }
`

export const MainControlsContainer = styled.div`
    text-align: center;
    background-color: ${SWIFTLY_BLUE};
    padding: 1rem;
    1px solid #ffffffa3;
    box-shadow: 0 0 8px 2px #435c7f, inset 0 0 8px 2px #435c7f;
  }
`
export const SearchInput = styled.input`
    font-size: 1.8rem;
    color: white;
    width: 100%;
    height: 100%;
    padding: 0 0 0 1rem;
    background: tomato;
    border: none;
    outline: none;
`

export const EmtpyResultMessage = styled.div`
    color: #fff9b0;
    font-size: 2rem;
    padding: 3rem;
    display: flex;
    justify-content: center;
`
