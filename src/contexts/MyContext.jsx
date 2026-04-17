import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [contextValue, setContext] = useState("Moi, context + tila");
  //let contextValue = "Moi vaan contextista";
  //const setContext = (arvo) => (contextValue = arvo);

  return (
    <MyContext.Provider value={{ contextValue, setContext }}>
      {children}
    </MyContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMyContext = () => useContext(MyContext);
