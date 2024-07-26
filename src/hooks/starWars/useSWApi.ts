import { SWAPI_PATHS } from "@api/constants";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { IPeople, IPlanet, ISpecie } from "@api/types";
import { PlanetsUrlMap, PopulatePeopleDataProps, SpeciesUrlMap, UsePlanetsProps, UseSpeciesProps, UseSWPeopleProps } from "./types";
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

export const useSWPeople = ({ splitFragments }: { splitFragments: boolean }): UseSWPeopleProps => {

  const peopleUrl = getSWApiUrl(SWAPI_PATHS.PEOPLE);
  const { isLoading, isError, data = [], error } = useQuery<IPeople[]>({
    queryKey: ['people'],
    queryFn: async () => await fetch(peopleUrl).then(response => response.json()),
  })

  const paginatedPeople = splitFragments ? useMemo(
    () => data && getFragments(data),
    [data]
  ) : null;

  return {
    isLoading,
    isError,
    error,
    paginatedPeople,
    people: data || [],
    count: data?.length || 0
  }
};

/**
 * @description returns fixed array
 * @returns {IPeople[]} People[] array with objects instead of species or homeworld urls
 */
const populatePeopleData = ({ rawPeopleData, planetsValuesByUrl, speciesValuesByUrl }: PopulatePeopleDataProps) => {
  if (!rawPeopleData) return null;
  rawPeopleData.forEach((character: IPeople) => {
    const speciesUrls = character.species as string[];
    const homeworldUrl = character.homeworld as string;

    if (speciesUrls.length) {
      character.species = speciesUrls.map((specieUrl: string) => speciesValuesByUrl[specieUrl]);
    }

    character.homeworld = planetsValuesByUrl[homeworldUrl]
  })

  return rawPeopleData;
}

export const useStarWarsDatabase = () => {
  const {
    isLoading,
    error: errorLoadingCharacters,
    people = [],
    count: characterCount,
  } = useSWPeople({ splitFragments: false });


  const { planets, planetsValuesByUrl, count: planetsCount } = usePlanets();
  const { species, speciesValuesByUrl, count: speciesCount } = useSpecies();

  const emptyDBValues: boolean = characterCount === 0 || speciesCount === 0 || planetsCount == 0;


  const populatedPeopleData = useMemo(
    () => !emptyDBValues && populatePeopleData({
      rawPeopleData: people,
      planetsValuesByUrl,
      speciesValuesByUrl
    }),
    [emptyDBValues]
  );

  const paginatedPeople = useMemo(
    () => !emptyDBValues && populatedPeopleData && getFragments(populatedPeopleData),
    [populatedPeopleData]
  );



  return {
    isLoading,
    errorLoadingCharacters,
    planets,
    species,
    paginatedPeople,
    populatedPeopleData,
    peopleCount: people.length,
    planetsValuesByUrl,
    speciesValuesByUrl
  }
}