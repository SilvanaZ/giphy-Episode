import React, { useState } from "react";
import { AddCategory } from "./____components____/AddCategory";
import { GifGrid } from "./____components____/GifGrid";

export const GiphyEpisodeApp = () => {

    const [ categories, setCategories ] = useState([ 'One Piece' ]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        //console.log(newCategory);
        //categories.push(newCategory);
        setCategories([ newCategory, ...categories ]);
        //setCategories(cat => [ newCategory, ...cat ]);
    }

    return (
        <>
            <h1> GiphyEpisodeApp</h1>
            <AddCategory
                //setCategories={setCategories}
                onNewCategory={(value) => onAddCategory(value)}
            //currentCategories={categories}
            />

            {/*<button onClick={onAddCategory}>Añadir</button>*/}
            {
                categories.map(category => (
                    <GifGrid key={category}
                        category={category} />

                ))
            }

            {/* Gif Item */}


        </>
    )
}
