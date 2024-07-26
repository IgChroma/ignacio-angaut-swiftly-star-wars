import { PAGINATION_SIZE, SWAPI_BASE_URL, SWAPI_PATH, SWAPI_PATHS } from "@api/constants";
import React, { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { IPeople, IPlanet, ISpecie } from "@api/types";
import { PlanetsUrlMap, SpeciesUrlMap, useSWPeopleProps } from "./types";


export const getSWApiUrl = (path: SWAPI_PATH): string => `${SWAPI_BASE_URL}/${path}`;


export const getFragments = <T>(fullArray: T[]) => {
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

export const usePlanets = () => {
  const planetListUrl = getSWApiUrl(SWAPI_PATHS.PLANETS);
  const { isLoading, isError, data = [], error } = useQuery<IPlanet[]>({
    queryKey: ['planets'],
    queryFn: async () => await fetch(planetListUrl).then(response => response.json()),
  })

  const planetsValuesByUrl: PlanetsUrlMap = useMemo(
    () => {
      const planetsMap: PlanetsUrlMap = {};
      data?.forEach(planet => {
        planetsMap[planet.url] = planet;
      })
      return planetsMap;
    },
    [data]
  );

  return {
    isLoading,
    isError,
    error,
    planets: data || [],
    planetsValuesByUrl,
    count: data?.length || 0
  }
};

export const useSpecies = () => {
  const planetListUrl = getSWApiUrl(SWAPI_PATHS.SPECIES);
  const { isLoading, isError, data = [], error } = useQuery<ISpecie[]>({
    queryKey: ['species'],
    queryFn: async () => await fetch(planetListUrl).then(response => response.json()),
  })


  const speciesValuesByUrl: SpeciesUrlMap = useMemo(
    () => {
      const specieMap: SpeciesUrlMap = {};
      data?.forEach(planet => {
        specieMap[planet.url] = planet;
      })
      return specieMap;
    },
    [data]
  );

  return {
    isLoading,
    isError,
    error,
    species: data || [],
    speciesValuesByUrl,
    count: data?.length || 0
  }
};

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