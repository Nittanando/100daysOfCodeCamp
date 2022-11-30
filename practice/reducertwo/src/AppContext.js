import React, { createContext, useState } from "react";

const AppContext = createContext();
// function reducerFunction(){

// }
// const initialState = {
//     like: 0,
//     size: 18,
// }

function AppContextProvider(props) {
  // const [state, dispatch] = useReducer(reducerFunction, initialState)
  const [color, setColor] = useState("black");
  const [size, setSize] = useState(16);
  const [like, setLike] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const handleLike = () => {
    setLike(like + 1);
  };
  return (
    <div>
      <AppContext.Provider
        value={{
          color,
          setColor,
          size,
          setSize,
          like,
          setLike,
          handleLike,
          darkMode,
          setDarkMode,
        }}
      >
        {props.children}
      </AppContext.Provider>
    </div>
  );
}
export { AppContextProvider, AppContext };
