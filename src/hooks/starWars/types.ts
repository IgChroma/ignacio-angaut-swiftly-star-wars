import { IPeople, IPlanet, ISpecie } from "@api/types";

export type PlanetsUrlMap = {
    [key: string]: IPlanet
}

export type SpeciesUrlMap = {
    [key: string]: ISpecie
}

/** Shared return keys between the 3 SW hooks */
interface BaseHookProps<T> {
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
    count: number;
}

export interface UsePlanetsProps extends BaseHookProps<IPlanet> {
    planets: IPlanet[];
    planetsValuesByUrl: { [key: string]: IPlanet };
}

export interface UseSpeciesProps extends BaseHookProps<ISpecie> {
    species: ISpecie[];
    speciesValuesByUrl: { [key: string]: ISpecie };
}

export interface UseSWPeopleProps extends BaseHookProps<IPeople> {
    people?: IPeople[];
    paginatedPeople: IPeople[][] | null;
}


export interface PopulatePeopleDataProps {
    rawPeopleData: IPeople[];
    speciesValuesByUrl: { [key: string]: ISpecie };
    planetsValuesByUrl: { [key: string]: IPlanet };
}