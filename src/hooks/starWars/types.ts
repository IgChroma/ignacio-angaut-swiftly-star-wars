import { IPeople } from "@api/types";

export interface useSWPeopleProps {
    isLoading: boolean | null;
    isError: boolean | null;
    error: Error | null;
    people?: IPeople[];
    count: number;
    paginatedPeople: IPeople[][];
}