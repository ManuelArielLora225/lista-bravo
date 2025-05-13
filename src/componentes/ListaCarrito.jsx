import React from 'react'
import '../hojas-estilos/ListaCarrito.css'
import BotonCambioPagina from './BotonCambioPagina'
import { useListadoCarrito } from '../providers/ProvidersDeCarrito';
import ProductoCarrito from './ProductoCarrito';



const ListaCarrito  = () => {
    
    const { listaCarrito, eliminar } = useListadoCarrito();


  const totalCompra = listaCarrito.reduce((total, producto) => 
                    total + (producto.precio * producto.cantidad), 0);



    return(
        <>
        <div className='contenedor-titulo'>
            <h1 className='titulo-carrito'>CARRITO</h1>
            <h1 className='total-compra'>{`TOTAL: RD$ ${totalCompra}`}</h1>
        </div>
        <div className='contenedor-lista-carrito'>
            {listaCarrito?.map((producto, i) => (
                <ProductoCarrito 
                key={i}
                id={producto.id}
                nombre={producto.nombre}
                medida={producto.medida}
                cantidad={producto.cantidad}
                precioTotal={producto.precio * producto.cantidad }
                />
            ))}
        <BotonCambioPagina />
        </div>
        </>

    )
}

export default ListaCarrito