import React, { Component, ErrorInfo } from "react";
import jediTrick from "@assets/img/jeditrick.jpeg";
import { ErrorBoundaryProps, ErrorBoundaryState } from "./types";
import { StarWarsError, StarWarsErrorSubText, StyledJediImg } from "./styles";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
        return <>
          <StarWarsError>
            This <b>IS</b> what you are looking for <a href="https://www.starwars.com/databank/jedi-mind-trick"><i>*jedi wave mind trick*</i></a>
          </StarWarsError>

          <StarWarsErrorSubText> 
              (I mean... sorry, there was an error)
          </StarWarsErrorSubText>
                  
          <StyledJediImg src={jediTrick}/>
        </>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;