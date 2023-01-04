import React from 'react'
import { useDataContext } from '../context/DataContext'

export const Page1 = () => {

    const { data } = useDataContext()

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