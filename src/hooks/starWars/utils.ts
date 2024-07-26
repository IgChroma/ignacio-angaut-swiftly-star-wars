import { PAGINATION_SIZE, SWAPI_BASE_URL, SWAPI_PATH } from "@api/constants";


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