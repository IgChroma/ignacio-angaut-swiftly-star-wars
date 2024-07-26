import { IPeople, IPlanet, ISpecie } from "@api/types";

export type PlanetsUrlMap = {
    [key: string]: IPlanet
}

export type SpeciesUrlMap = {
    [key: string]: ISpecie
}

export interface useSWPeopleProps {
    isLoading: boolean | null;
    isError: boolean | null;
    error: Error | null;
    people?: IPeople[];
    count: number;
    paginatedPeople: IPeople[][];
}

export interface UsePlanetsProps {
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
    planets: IPlanet[];
    planetsValuesByUrl: { [key: string]: IPlanet };
    count: number;
}

export interface UseSpeciesProps {
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
    species: ISpecie[];
    speciesValuesByUrl: { [key: string]: ISpecie };
    count: number;
}