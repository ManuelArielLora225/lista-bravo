import React from 'react';
import { FaRegTrashCan } from "react-icons/fa6";



const ProductoCarrito = ({nombre, medida, precioTotal, cantidad}) => {

    return (

        <div className='contenedor-producto-carrito'>
            <div className='contenedor-titulares'>
                <h2 className='nombre'>{nombre}</h2>
                <p className='medida'>{medida}</p>
            </div>
            <div className='contenedor-cantidad'>
                <p className='cantidad'>{cantidad}</p>
            </div>
            <div className='contenedor-precio-total'>
                <p className='precio-total'>{precioTotal}</p>
            </div>
            <div className='contenedor-borrador'>
                <FaRegTrashCan className='borrador'/>
            </div>

        </div>
    )
}

export default ProductoCarrito