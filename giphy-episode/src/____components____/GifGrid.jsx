import { useState, useEffect } from 'react';
import { getGifts } from '../___helpers___/getGifts.js';




export const GifGrid = ({ category }) => {


    const [ counter, setCounter ] = useState(10);

    useEffect(() => {
        getGifts(category);
    }, []);


    return (
        <>
            <h3>{category}</h3>
            {/* <p>Hola a todos</p> */}
            <h5>{counter}</h5>
            <button onClick={() => setCounter(counter + 1)}>enter</button>
        </>
    )
}
