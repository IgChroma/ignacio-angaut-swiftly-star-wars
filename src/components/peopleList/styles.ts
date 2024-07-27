import styled from 'styled-components';


export const SWIFTLY_BLUE = "#405c80";
export const StarWarsTitle = styled.h1`
  color: white;
  font-family: starWarsFont;
  font-size: 2rem;
  border-radius: 18px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
    @media (min-width: 1030px) {
            justify-content: space-between;
            display: flex;
            align-items: center;
            padding: 0 1rem;
            font-size: 50px;
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


export const SearchTitle = styled.div`

font-size: 1.25rem;
`

export const SearchInputContainer = styled.div`
display: flex;
justify-content: center;
padding: 12px;
`

export const SearchIconContainer = styled.div`opacity: 0.7;`
export const DeleteIconContainer = styled.div`opacity: 0.6; cursor:pointer`;

export const SearchInputWrapper = styled.div`

  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem 0 1rem;
  border-radius: 0.5rem;
  background:white;
  box-sizing: border-box;
  text-align: center;
  width: 40%;


    @media only screen and (min-width: 768.1x) and (max-width: 1200px) {
        width: 75%;
    }

    @media only screen and (max-width: 768px) {
      width: 100%;
      font-size: 1rem;
    }
 
  i {
    font-size: 1.5rem;
    color: white;
  }
}
`

export const SearchInput = styled.input`
    font-size: 1rem;
    color: ${SWIFTLY_BLUE};
    width: 100%;
    padding: 0 0 0 1rem;
    background:white;
    border: 1px solid white;
    outline: none;
    @media (min-width: 400) {
        font-size: 1rem;
    }
    text-align: center;

     &::placeholder {
        color: ${SWIFTLY_BLUE};
    }
`

export const EmtpyResultMessage = styled.div`
    color: #fff9b0;
    font-size: 2rem;
    padding: 3rem;
    display: flex;
    justify-content: center;
`