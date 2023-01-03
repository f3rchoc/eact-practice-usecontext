import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

export const Page1 = () => {

    const { data } = useContext(DataContext)

    return (
        <div>
            <h1>Page 1</h1>
            <hr/>
            <pre>
                <span>Data: </span>
                { JSON.stringify(data, null, 2) }
            </pre>
        </div>
    )
    
}