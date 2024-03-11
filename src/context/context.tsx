import React, { ReactNode, createContext, useReducer } from "react";

import { Actions } from "./Actions";
import { Contact, State, Update } from "./State";
import { reducer } from "./Reducer";

export const defaultState = { id: 0, firstName: "", lastName: "", phone: "" };

export type Dispatch = (action: Actions) => void;

export const ContextState = createContext({} as any);

export const ContextCrudProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {} as State);

  return (
    <ContextState.Provider value={{ state, dispatch }}>
      {children}
    </ContextState.Provider>
  );
};
