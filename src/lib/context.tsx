import  { createContext, useState } from "react";

// Step 1: Create context
// eslint-disable-next-line react-refresh/only-export-components
export const TripContext = createContext({});

// Step 2: Create Provider
export const TripProvider = ({ children }:any) => {
  const [aiTrip, setAiTrip] = useState(null);

  // const toggleTheme = () => {
  //   setTheme((prev) => (prev === "light" ? "dark" : "light"));
  // };

  return (
    <TripContext.Provider value={{ aiTrip, setAiTrip }}>
      {children}
    </TripContext.Provider>
  );
};
