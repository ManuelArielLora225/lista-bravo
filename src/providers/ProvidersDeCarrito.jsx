

import React, { useState, useContext} from 'react';

export const contextoCarrito = React.createContext();


export const ListadoCarrito = ({ children }) => {

    const [listaCarrito, setListaCarrito] = useState([]);

    const agregarCarrito = (producto) => {
         setListaCarrito(carritoActual => {
            return [producto, ...carritoActual]
         });
    }

    const sumarCantidad =(productoId) => {
            setListaCarrito(carritoActual => (
                carritoActual.map(producto => (
                    producto.id === productoId ?
                    { ...producto, cantidad: producto.cantidad + 1,} 
                    : producto
                ))
            ))
    
    }

        const restarCantidad =(productoId) => {
            setListaCarrito(carritoActual => (
                carritoActual.map(producto => (
                    producto.id === productoId ?
                    {...producto, cantidad: producto.cantidad - 1} 
                    : producto
                ))
            ))
    
    }


    return (
        <contextoCarrito.Provider
         value={{listaCarrito, agregarCarrito, sumarCantidad, restarCantidad }}>
            {children}
        </contextoCarrito.Provider>
    )

}

export const useListadoCarrito = () => {return useContext(contextoCarrito);}