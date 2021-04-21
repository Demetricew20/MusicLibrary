import React, { createContext, useContext, useReducer } from 'react';

// Creates data layer
export const StateContext = createContext();

// Wrap app and provide data layer to components in app
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pulls information from the data layer
export const useStateValue = () => useContext(StateContext);