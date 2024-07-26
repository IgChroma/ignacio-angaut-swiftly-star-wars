import {
  MainControlsContainer,
  SearchInput
} from "@components/peopleList/styles";
import React, { useEffect, useMemo, useState } from "react";

interface SearchAndPaginationProps {
  // Could be split on different components ideally (with more time)
  // Search
  searchQuery: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isSearching: boolean;
  // Pagination
  page: number;
  setPage: (newPage: number) => void;
  maxPage: number;
}

export const SearchAndPagination: React.FC<SearchAndPaginationProps> = ({
  searchQuery,
  handleSearch,
  isSearching,
  page,
  setPage,
  maxPage
}) => {
  const isLastPage = page + 1 >= maxPage;
  const setPreviousPage = () => {
    if (page > 0) setPage(page - 1);
  };
  const setNextPage = () => {
    if (!isLastPage) setPage(page + 1);
  };

  return (
    <MainControlsContainer>
      Search Characters
      <SearchInput
        type="text"
        placeholder="Search by name, homeworld or specie"
        value={searchQuery}
        onChange={handleSearch}
      />
      <div>
        <button disabled={isSearching || page === 0} onClick={setPreviousPage}>
          Previous Page
        </button>
        Page [{searchQuery ? 1 : page + 1} / {searchQuery ? 1 : maxPage}]
        <button disabled={isSearching || isLastPage} onClick={setNextPage}>
          Next Page
        </button>
      </div>
    </MainControlsContainer>
  );
};

export default SearchAndPagination;
