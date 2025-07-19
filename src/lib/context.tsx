import React, { createContext, useState } from "react";

// Step 1: Create context
export const TripContext = createContext();

// Step 2: Create Provider
export const TripProvider = ({ children }) => {
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
