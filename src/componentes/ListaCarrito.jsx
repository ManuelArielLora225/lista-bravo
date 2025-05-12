import React from 'react'
import BotonCambioPagina from './BotonCambioPagina'
import { useListadoCarrito } from '../providers/ProvidersDeCarrito';
import ProductoCarrito from './ProductoCarrito';
/* import { LiaSignInAltSolid } from 'react-icons/lia';
 */


const ListaCarrito  = () => {
    
    const { listaCarrito } = useListadoCarrito();

    let totalCompra = listaCarrito.reduce((total, producto) => {
        return total + producto.precioTotal;
    }, 0)

    console.log(listaCarrito.map((producto) =>  producto.precioTotal))

    return(
        <>
        <div className='contenedor-titulo'>
            <h1>CARRITO</h1>
            <h1>{`TOTAL: RD$ ${totalCompra}`}</h1>
        </div>
        <div className='contenedor-lista-carrito'>
            {listaCarrito?.map((producto, i) => (
                <ProductoCarrito 
                key={i}
                id={producto.id}
                nombre={producto.nombre}
                medida={producto.medida}
                cantidad={producto.cantidad}
                precioTotal={producto.precio}
                />
            ))}
        <BotonCambioPagina />
        </div>
        </>

    )
}

export default ListaCarrito