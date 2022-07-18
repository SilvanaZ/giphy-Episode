import React, { useState } from 'react';
import { AddCategory, GifGrid } from './____components____';

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
                    <GifGrid
                        key={category}
                        category={category} />

                ))
            }
        </>
    )
}
