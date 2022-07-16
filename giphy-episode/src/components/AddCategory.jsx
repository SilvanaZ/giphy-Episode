import { useState } from 'react';

export const AddCategory = () => {

    const [ inputValue, setInputValue ] = useState('One piece');
    const onInputChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    }

    return (
        <input type="text"
            placeholder="Buscar Gifs..."
            value={inputValue}
            onChange={(event) => onInputChange(event)}
        />
    )
}
