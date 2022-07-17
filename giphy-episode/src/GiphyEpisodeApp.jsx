import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiphyEpisodeApp = () => {

    const [ categories, setCategories ] = useState([ 'One Piece', 'Kimetsu no Yaiba' ]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        //console.log(newCategory);
        //categories.push(newCategory);
        setCategories([ newCategory, ...categories ]);
        //setCategories(cat => [ newCategory, ...cat ]);
    }

    return (
        <>
            {/* titulo */}
            <h1> GiphyEpisodeApp</h1>

            {/* Input */}
            <AddCategory
                //setCategories={setCategories}
                onNewCategory={(value) => onAddCategory(value)}
            //currentCategories={categories}
            />

            {/* Listado de Gif */}
            {/*<button onClick={onAddCategory}>Añadir</button>*/}

            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>

            {/* Gif Item */}


        </>
    )
}
