import React, { useState } from "react";

export const GiphyEpisodeApp = () => {

    const [categories, setCategories] = useState(['One Piece', 'One Punchman', 'Nanatzu no Taizai', 'Kimetsu no Yaiba']);

    console.log(categories)
    return (
        <>
            {/* titulo */}
            <h1> GiphyEpisodeApp</h1>

            {/* Input */}

            {/* Listado de Gif */}
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>

            {/* Gif Item */}
        </>
    )
}
