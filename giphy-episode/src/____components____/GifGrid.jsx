import { GifItem } from './GifItem.jsx';
import { useFetchGifs } from '../___hooks___/useFetchGifs.js';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {/*<LoadingMessage isLoading ={isLoading}  *otra forma de hacer lo del cargando* */}
            {
                isLoading && (<h2>Cargando...</h2>)

            }

            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
