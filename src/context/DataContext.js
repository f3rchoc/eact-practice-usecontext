import React, { createContext, useState, useContext } from "react";

const initData = {
  name: "Fernando",
  hobbie: "Play soccer",
};

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  return (
    <DataContext.Provider value={{ data, setData: () => setData(initData) }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider')
  }
  return context
}
