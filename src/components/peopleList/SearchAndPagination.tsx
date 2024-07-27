import { DeleteIcon } from "@components/Icons/DeleteIcon";
import { PaginationPlayIcon } from "@components/Icons/PaginationPlayIcon";
import { SearchIcon } from "@components/Icons/SerachIcon";
import {
  DeleteIconContainer,
  MainControlsContainer,
  NavigationButton,
  PaginationContainer,
  SearchIconContainer,
  SearchInput,
  SearchInputContainer,
  SearchInputWrapper,
  SearchTitle
} from "@components/peopleList/styles";
import React, { useRef } from "react";

interface SearchAndPaginationProps {
  // Could be split on different components ideally (with more time)
  // Search
  searchQuery: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isSearching: boolean;
  // Pagination
  page: number;
  setSearchQuery: (search: string) => void;
  setPage: (newPage: number) => void;
  maxPage: number;
}

export const SearchAndPagination: React.FC<SearchAndPaginationProps> = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
  isSearching,
  page,
  setPage,
  maxPage
}) => {

  const searchInput = useRef<HTMLInputElement | null>(null);
  const isLastPage = page + 1 >= maxPage;
  const setPreviousPage = () => {
    if (page > 0) setPage(page - 1);
  };
  const setNextPage = () => {
    if (!isLastPage) setPage(page + 1);
  };

  const disabledPrevious = isSearching || page === 0;
  const disabledNext = isSearching || isLastPage;

  return (
    <MainControlsContainer>
      <SearchTitle>Search Characters:</SearchTitle>

      <SearchInputContainer>
        <SearchInputWrapper>
          <SearchIconContainer onClick={() => {        
              if( searchInput?.current) (searchInput.current as HTMLInputElement)?.focus();
            }} >
            <SearchIcon color="white" />
          </SearchIconContainer>

          <SearchInput
            ref={searchInput}
            type="text"
            placeholder="Search by name, homeworld or specie"
            value={searchQuery}
            onChange={handleSearch}
          />
          {isSearching && <DeleteIconContainer onClick={()=>setSearchQuery("")}>
             <DeleteIcon/>
          </DeleteIconContainer>}

        </SearchInputWrapper>
      </SearchInputContainer>

      <PaginationContainer>
        <NavigationButton disabled={disabledPrevious} onClick={setPreviousPage}>
          <PaginationPlayIcon rotated={true} isDisabled={disabledPrevious} />
          Previous Page
        
        </NavigationButton>

        Page [{searchQuery ? 1 : page + 1} / {searchQuery ? 1 : maxPage}]

        <NavigationButton disabled={disabledNext} onClick={setNextPage}>
          Next Page
          <PaginationPlayIcon isDisabled={disabledNext} rotated={false}/>
        </NavigationButton>
      </PaginationContainer>
    </MainControlsContainer>
  );
};

export default SearchAndPagination;
