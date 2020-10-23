import React, { useState, createContext } from "react";

export const LoadingContext = createContext();

export const LoadingProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.provider value={ isLoading, setIsLoading }>
      {props.children}
    </LoadingContext.provider>
  );
};
