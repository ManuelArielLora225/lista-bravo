

import React, { useState, useContext} from 'react';

export const contextoCarrito = React.createContext();


export const ListadoCarrito = ({ children }) => {

    const [listaCarrito, setListaCarrito] = useState([]);

    const agregarCarrito = (producto) => {
        return setListaCarrito(prevCarrito => [producto, ...prevCarrito]);
    }

    return (
        <contextoCarrito.Provider value={{listaCarrito, agregarCarrito}}>
            {children}
        </contextoCarrito.Provider>
    )

}

export const useListadoCarrito = () => {return useContext(contextoCarrito);}