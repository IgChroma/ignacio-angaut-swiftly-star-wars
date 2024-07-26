import { SWIFTLY_BLUE } from '@components/peopleList/styles';
import styled from 'styled-components';

export const StarWarsError = styled.h1`
  color:  #dfa124;
font-size: 20px;
text-align: center;

a {
text-decoration: none;
  color: ${SWIFTLY_BLUE} !important;
}
`;

export const StarWarsErrorSubText = styled.h4`
  color: #df2424;
font-size: 20px;
text-align: center;
`;

export const StyledJediImg = styled.img`
margin-right: auto;
margin-left: auto;
 width: 50%;
 display: block;
 z-index: 1;
`;