import { SWAPI_PATHS } from "@api/constants";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { IPeople, IPlanet, ISpecie } from "@api/types";
import { PlanetsUrlMap, SpeciesUrlMap, UsePlanetsProps, UseSpeciesProps, useSWPeopleProps } from "./types";
import { getFragments, getSWApiUrl } from "./utils";

export const usePlanets = (): UsePlanetsProps => {
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

export const useSpecies = (): UseSpeciesProps => {
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