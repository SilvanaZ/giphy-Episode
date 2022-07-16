import React, { useState } from "react";

export const GiphyEpisodeApp = () => {

    const [categories, setCategories] = useState(['One Piece', 'One Punchman', 'Nanatzu no Taizai', 'Kimetsu no Yaiba']);

    const onAddCategory = () => {
        //categories.push('Inuyasha')
        setCategories([...categories, 'Inuyasha']);
        //setCategories(cat => [...cat, 'Inuyasha']);
    }

    return (
        <>
            {/* titulo */}
            <h1> GiphyEpisodeApp</h1>

            {/* Input */}

            {/* Listado de Gif */}
            <button onClick={onAddCategory}>Agregar Categoria</button>
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>

            {/* Gif Item */}
        </>
    )
}
