import React, { useEffect, useState } from "react";
import {  useStarWarsDatabase} from "../../hooks/starWars/useSWApi";
import { IPeople, IPlanet, ISpecie } from "@api/types";
import PeopleCard from "../peopleCard/PeopleCard";
import { PAGINATION_SIZE } from "@api/constants";
import {
  CharacterListContainer,
  EmtpyResultMessage,
} from "./styles";
import { BracketBox, BracketBoxContainer } from "@components/peopleCard/styles";
import SearchAndPagination from "@components/main/SearchAndPagination";

const PeopleList: React.FC = () => {
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredValues, setFilteredValues] = useState<IPeople[]>([]);

  const {
    paginatedPeople,
    isLoading,
    populatedPeopleData: fullCharacterList,
    errorLoadingCharacters
  } = useStarWarsDatabase();

  const maxPage = fullCharacterList ? Math.ceil(fullCharacterList.length / PAGINATION_SIZE) : 0;
  const isSearching = searchQuery?.trim().length > 0;

  if (errorLoadingCharacters) {
    return (
      <p>
        These are not the results you are looking for (jedi wave)... I mean
        Error loading characters
      </p>
    );
  }

  let characters: IPeople[];

  const executeSearch = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    if (!fullCharacterList || !searchQuery) return [];

    // filter priority by 1. name
    const filteredByName = fullCharacterList.filter(character => {
      const name = character.name.toLowerCase() || "";
      return name.includes(lowerCaseQuery);
    });

    // filter priority by 2. by planet
    const filteredByPlanetSearch = fullCharacterList.filter(character => {
      const homeworldName = (character.homeworld as IPlanet)?.name?.toLowerCase() || "";
      return homeworldName.includes(lowerCaseQuery);
    });

    // filter priority by 3. by specie
    const filteredByPlanetSpecie= fullCharacterList.filter(character => {
      const species = (character.species as ISpecie[])
      let foundSpecie = false;
      species.forEach(specie => {
        const specieName = specie.name.toLowerCase() || "";
        if (specieName.includes(lowerCaseQuery)) {
          foundSpecie = true;
        }
      })
      return foundSpecie
    });
    const uniqueValues = new Set([...filteredByName,...filteredByPlanetSearch,...filteredByPlanetSpecie])
    setFilteredValues([...uniqueValues]);
  };
  useEffect(
    () => {
      if (isSearching)
        executeSearch()
      else {
        // clean search
        setFilteredValues([]);
      }
    },
    [searchQuery]
  );

  if (isSearching) {
    characters = filteredValues || [];
  } else {
    characters = (paginatedPeople && paginatedPeople[page]) || [];
  }

  const handleSearch = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(ev.target.value);

  const emptySearchResults = searchQuery && filteredValues.length === 0;

  return (
    <div id="starWarsCharactersList">
   
      {/* 1: Controllers: */}
   <SearchAndPagination
        searchQuery={searchQuery}
        handleSearch={handleSearch}
        isSearching={isSearching}      
        setPage={setPage}
        page={page}
        maxPage={maxPage}
      />
    
      {/* 2: Character grid results: */}

      {isLoading ? <>
        {/* Skeleton ui */}
      <CharacterListContainer>
        {[...new Array(PAGINATION_SIZE)].map(pageIndex =>      
          <BracketBoxContainer key={pageIndex}>
            <BracketBox>
              ...
            </BracketBox>
        </BracketBoxContainer>
          )}
       </CharacterListContainer>
        </> :        
        <>
          {emptySearchResults ?
            <EmtpyResultMessage>
        Hey! No results where found for this character name, homeworld or specie. Please try again.
          </EmtpyResultMessage> :
          <CharacterListContainer>
            {characters?.map((character: IPeople) =>
              <PeopleCard key={character.name} character={character} />
          )}
        </CharacterListContainer>}
      </>       
      }
    </div>
  );
};

export default PeopleList;
