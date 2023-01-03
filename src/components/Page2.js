import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { ButtonChangeData } from './ButtonChangeData';

export const Page2 = () => {

    const { data } = useContext(DataContext)

    return (
        <div>
            <h1>Page 2</h1>
            <hr/>
            <pre>
                <span>Data: </span>
                { JSON.stringify(data, null, 2) }
            </pre>
            <ButtonChangeData />
        </div>
    )
}