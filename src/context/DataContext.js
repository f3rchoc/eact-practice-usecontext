import React, { createContext, useState } from "react";

const initData = {
  name: "Fernando",
  hobbie: "Play soccer",
};

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  return (
    <DataContext.Provider value={{ data, setData: () => setData(initData) }}>
      {children}
    </DataContext.Provider>
  );
};
