import { SWAPI_BASE_URL } from "@api/constants";
import React, { FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PeopleList from "./components/peopleList/PeopleList";
import StarParallax from "./style/starParallax/StarsParallax";
import SwiftlyLogo from "./style/SwiftlyLogo";
import {
  StarWarsTitle,
  SwiftlyLogoWrapper
} from "./components/peopleList/styles";

export const App: FC = () => {
  // Create a client for the app
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StarWarsTitle className="starWarsFont">
      Star Wars Characters
        <SwiftlyLogoWrapper>
          <SwiftlyLogo width="300px" />
        </SwiftlyLogoWrapper>       
      </StarWarsTitle>
      <StarParallax />
      <PeopleList />
    </QueryClientProvider>
  );
};
