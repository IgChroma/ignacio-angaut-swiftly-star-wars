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