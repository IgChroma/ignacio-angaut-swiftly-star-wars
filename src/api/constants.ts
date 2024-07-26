export const SWAPI_BASE_URL: string = 'https://swapi.info/api';
export const SWAPI_PATHS = {
    PEOPLE: 'people',
    PLANETS: 'planets',
    SPECIES: 'species'
};


export type SWAPI_PATH = typeof SWAPI_PATHS[keyof typeof SWAPI_PATHS];


// Note for interview:
// since search api https://swapi.dev/api/people/?search=tattoine doesnt find homeworld or other values
// just searches by name. For this exercise will make search locallly.
export const PAGINATION_SIZE: number = 25;