import React,  {useContext} from 'react';
import { DataContext } from '../context/DataContext';

export const ButtonChangeData = () => {

  const {setData} = useContext(DataContext)

  return <button onClick={setData}>Set Data</button>
};