import React from 'react';
import { useDataContext } from '../context/DataContext';
import { ButtonChangeData } from './ButtonChangeData';

export const Page2 = () => {

    const { data } = useDataContext()

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