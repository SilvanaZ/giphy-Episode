import { useEffect, useState } from 'react';

import { GifGridItem } from './GifGridItem.jsx';
import { getGifts } from '../___helpers___/getGifts.js';


export const GifGrid = ({ category }) => {

    const [ images, setImages ] = useState([]);

    const getImages = async () => {
        const newImages = await getGifts(category);
        setImages(newImages);
    }

    useEffect(() => {

        getImages();
    }, [])

    return (
        <>
            <h3>{category}</h3>
            {/* <p>Hola a todos</p> */}
            <div>
                {
                    images.map(({ id, title }) => (
                        <GifGridItem />
                    ))
                }
            </div>
        </>
    )
}
