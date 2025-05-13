import React, { useState, useContext} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../hojas-estilos/Notificacion.css'


export const contextoCarrito = React.createContext();


export const ListadoCarrito = ({ children }) => {

    const [listaCarrito, setListaCarrito] = useState([]);

    const notificacionEnviado = () => {
        toast('Enviado al Carrito', {
            autoClose: 1000,
            position: 'top-left',
            hideProgressBar: true,
            closeButton: false,
            className: 'notificacion-Enviado'
        })
    }


    const agregarCarrito = (producto) => {
        notificacionEnviado();
        setListaCarrito(carritoActual => {
            const productoExiste = carritoActual.find(p => p.id === producto.id);
            if(productoExiste){
                return carritoActual.map(p =>
                    p.id === producto.id ?
                    {...p, cantidad: p.cantidad + 1}
                    : p
                )
            } else {
                return [{...producto, cantidad: 1}, ...carritoActual]
            }
             
        })
        
    };


    const sumarCantidad =(productoId) => {
            setListaCarrito(carritoActual => (
                carritoActual.map(producto => (
                    producto.id === productoId ?
                    { ...producto, cantidad: producto.cantidad + 1,} 
                    : producto
                ))
            ))
    
    }


        const restarCantidad = (productoId) => {
            const cantidadCero = listaCarrito.find(producto => producto.cantidad === 1);
            if(cantidadCero){
                eliminar(productoId)
            } else {
            setListaCarrito(carritoActual => (
                carritoActual.map(producto => (
                    producto.id === productoId ?
                    {...producto, cantidad: producto.cantidad - 1} 
                    : producto
                ))
            ))}
    }

    
        const eliminar = (productoId) => {
            setListaCarrito(carritoActual => (
                carritoActual.filter(producto => productoId !== producto.id)
            ))
        }

       



    return (
        <contextoCarrito.Provider
         value={{listaCarrito, agregarCarrito, sumarCantidad, restarCantidad, eliminar}}>
            {children}
        </contextoCarrito.Provider>
    )

}

export const useListadoCarrito = () => {return useContext(contextoCarrito);}