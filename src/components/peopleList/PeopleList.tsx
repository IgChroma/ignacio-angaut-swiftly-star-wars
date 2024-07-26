import React, { useMemo, useState } from "react";
import {
  usePlanets,
  useSpecies,
  useSWPeople
} from "../../hooks/starWars/useSWApi";
import { IPeople } from "@api/types";
import PeopleCard from "../peopleCard/PeopleCard";
import { PAGINATION_SIZE } from "@api/constants";
import { CharacterListContainer, MainControlsContainer } from "./styles";

const PeopleList: React.FC = () => {
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // Data queries from custom hooks
  const {
    isLoading,
    error,
    people = [],
    count,
    paginatedPeople
  } = useSWPeople();

  const { planets, planetsValuesByUrl } = usePlanets();
  const { species, speciesValuesByUrl } = useSpecies();
  
  // Pagination logic
  const maxPage = Math.ceil(count / PAGINATION_SIZE);
  const isLastPage = page + 1 >= maxPage;

  if (isLoading) {
    return <p>Downloading data from mothership...</p>;
  }

  if (error) {
    return (
      <p>
        These are not the results you are looking for (jedi wave)... I mean
        Error loading characters
      </p>
    );
  }

  let characters: IPeople[];

  if (!searchQuery) {
    characters = people;
  }
  characters = paginatedPeople[page];

  const setPreviousPage = () => {
    if (page > 0) setPage(page - 1);
  };
  const setNextPage = () => {
    if (!isLastPage) setPage(page + 1);
  };
  const handleSearch = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(ev.target.value);

  return (
    <div id="starWarsCharactersList">
      <MainControlsContainer>
        Search by name, homeworld or specie
        <input
          type="text"
          placeholder="search"
          value={searchQuery}
          onChange={handleSearch}
        />
        <div>
          <button disabled={page === 0} onClick={setPreviousPage}>
            Previous Page
          </button>
          Page [{page + 1} / {maxPage}]
          <button disabled={isLastPage} onClick={setNextPage}>
            Next Page
          </button>
        </div>
      </MainControlsContainer>

      <CharacterListContainer>
        {characters.map((character: IPeople) =>
          <PeopleCard key={character.name} character={character} />
        )}
      </CharacterListContainer>
    </div>
  );
};

export default PeopleList;
