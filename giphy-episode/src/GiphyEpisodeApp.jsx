import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiphyEpisodeApp = () => {

    const [ categories, setCategories ] = useState([ 'One Piece', 'One Punchman', 'Nanatzu no Taizai', 'Kimetsu no Yaiba' ]);

    const onAddCategory = () => {
        //categories.push('Inuyasha')
        setCategories([ 'Inuyasha', ...categories, ]);
        //setCategories(cat => [...cat, 'Inuyasha']);
    }

    return (
        <>
            {/* titulo */}
            <h1> GiphyEpisodeApp</h1>

            {/* Input */}
            <AddCategory onAddCategory={setCategories} />

            {/* Listado de Gif */}
            {/* <button onClick={onAddCategory}>Añadir</button> */}
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>

            {/* Gif Item */}


        </>
    )
}
