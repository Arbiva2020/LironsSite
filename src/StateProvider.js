//setup data layer
// we need it to track the basket
import React, { createContext, useContext, useReducer } from "react";

//this is the data layer
export const StateContext = createContext();

//build a provider to wrap our entire app with to give it access to the data layer
//initialState - the initial state of how the store looks like
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
{children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(stateContext);
