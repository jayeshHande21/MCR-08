import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  return <div>{children}</div>;
};
