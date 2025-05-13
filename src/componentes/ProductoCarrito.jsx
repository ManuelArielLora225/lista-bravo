import React from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import '../hojas-estilos/ProductoCarrito.css'
import { useListadoCarrito } from '../providers/ProvidersDeCarrito'
import Productos from './Productos';


const ProductoCarrito = ({nombre, medida, precioTotal, cantidad, id }) => {


    const { sumarCantidad, restarCantidad, eliminar } = useListadoCarrito();


    const sumarLaCantidad = () => {   
         sumarCantidad(id);
    }

        const restarLaCantidad = () => {
         restarCantidad(id);
    }

    const eliminarDelCarrito = () => {
        eliminar(id)
    }


   const total = precioTotal * cantidad; 



    return (

        <div className='contenedor-producto-carrito'>
            <div className='contenedor-titulares'>
                <h2 className='nombre'>{nombre}</h2>
                <p className='medida'>{medida}</p>
            </div>
            <div className='contenedor-cantidad'>
                <div className='contenedor-restar'>
                 <p className='restar' onClick={restarLaCantidad}>-</p>
                </div>
                <p className='cantidad'>{cantidad}</p>
                <div className='contenedor-restar'>
                 <p className='sumar' onClick={sumarLaCantidad}>+</p>
                </div>
            </div>
            <div className='contenedor-precio-total'>
                <p className='precio-total'>{`RD$ ${precioTotal}`}</p>
            </div>
            <div className='contenedor-borrador'>
                <FaRegTrashCan className='borrador' onClick={eliminarDelCarrito}/>
            </div>

        </div>
    )
}

export default ProductoCarrito