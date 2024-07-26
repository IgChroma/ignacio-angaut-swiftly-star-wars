import { PAGINATION_SIZE, SWAPI_BASE_URL, SWAPI_PATH, SWAPI_PATHS } from "@api/constants";
import React, { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { IPeople } from "@api/types";
import { useSWPeopleProps } from "./types";


export const getSWApiUrl = (path: SWAPI_PATH): string => `${SWAPI_BASE_URL}/${path}`;


const getFragments = <T>(fullArray: T[]) => {
  let pageIndex: number = 0;
  const paginatedFragments = [];
  for (let i = 0; i < fullArray.length; i++) {
    const currentElem: T = fullArray[i];
    if (i > (((pageIndex + 1) * PAGINATION_SIZE) - 1)) {
      pageIndex++;
    }
    if (paginatedFragments[pageIndex]) {
      paginatedFragments[pageIndex].push(currentElem)
    } else {
      paginatedFragments[pageIndex] = [currentElem]
    }
  }
  return paginatedFragments;
}

export const useSWPeople = (): useSWPeopleProps => {

  const peopleUrl = getSWApiUrl(SWAPI_PATHS.PEOPLE);
  const { isLoading, isError, data = [], error } = useQuery<IPeople[]>({
    queryKey: ['people'],
    queryFn: async () => await fetch(peopleUrl).then(response => response.json()),
  })

  const paginatedPeople = useMemo(
    () => data && getFragments(data),
    [data]
  );

  return {
    isLoading,
    isError,
    error,
    paginatedPeople,
    people: data || [],
    count: data?.length || 0
  }
};