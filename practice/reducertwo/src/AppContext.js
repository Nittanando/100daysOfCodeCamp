import React, { createContext, useReducer } from "react";
import ReducerContext from "./ReducerContext";

const AppContext = createContext();
function reducerFunction(state, action) {
  switch (action.type) {
    case "INCREMENT_LIKE":
      return { ...state, like: state.like + 1 };
    case "COLOR":
      return { ...state, color: action.value };
    case "SIZE":
      return { ...state, size: action.value };
    case "DARK_MODE":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
}

const initialState = {
  color: "black",
  like: 0,
  size: 18,
  darkMode: false,
};

function AppContextProvider(props) {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <ReducerContext.Provider value={dispatch}>
      <AppContext.Provider value={state}>{props.children}</AppContext.Provider>
    </ReducerContext.Provider>
  );
}
export { AppContextProvider, AppContext };
