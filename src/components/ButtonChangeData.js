import React from 'react';
import { useDataContext } from '../context/DataContext';

export const ButtonChangeData = () => {

  const {setData} = useDataContext()

  return <button onClick={setData}>Set Data</button>
};