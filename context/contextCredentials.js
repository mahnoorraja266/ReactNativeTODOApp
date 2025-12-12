import React, { createContext, useContext } from 'react';

// Create the context with PascalCase
export const CredentialsContext = createContext();

// Create a custom hook to use the context
export default function useCredentials() {
  return useContext(CredentialsContext);
}
