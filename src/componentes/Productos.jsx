import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import '../hojas-estilos/Productos.css'
import { useListadoCarrito } from '../providers/ProvidersDeCarrito'


const Productos = ({nombre, medida, precio, id}) => {

    const { agregarCarrito } = useListadoCarrito();

    const agregarAlCarrito = () => {
/*          console.log("Agregando:", {nombre, medida, precio}); 
 */         agregarCarrito({nombre, medida, precio, id, cantidad: 1}); 
    }
    
    return (
    <div className='contenedor-producto'>
        <div className='contenedor-detalles-producto'>
            <h2 className='nombre-producto'>{nombre}</h2>
            <p className='medida-producto'>{medida}</p>
        </div>
        <div className='contenedor-precio-compra'>
            <p className='precio-producto'>{`RD$${precio}`}</p>
            <div className='contenedor-carrito'>
            <CiShoppingCart  className='carrito-producto' onClick={agregarAlCarrito}/>
            </div>
        </div>
    </div>
    )
}

export default Productos