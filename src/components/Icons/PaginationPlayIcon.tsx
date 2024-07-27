import { SWIFTLY_BLUE } from "@components/peopleList/styles";
import React from "react";
import styled from "styled-components";

export const RotatedDiv = styled.div`transform: rotate(180deg);`;

export const PaginationPlayIcon = ({
  rotated,
  isDisabled
}: {
  rotated: boolean;
  isDisabled: boolean;
}) => {
  const svg = (
    <svg
      fill="transparent"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      id="next"
      data-name="Flat Color"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="primary"
        d="M18.6,11.2l-12-9A1,1,0,0,0,5,3V21a1,1,0,0,0,.55.89,1,1,0,0,0,1-.09l12-9a1,1,0,0,0,0-1.6Z"
        fill={!isDisabled ? SWIFTLY_BLUE : "darkgrey"}
      />
    </svg>
  );

  return rotated
    ? <RotatedDiv>
        {svg}
      </RotatedDiv>
    : svg;
};
