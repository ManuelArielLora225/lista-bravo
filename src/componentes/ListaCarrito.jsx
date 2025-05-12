import React from 'react'
import BotonCambioPagina from './BotonCambioPagina'
import { useListadoCarrito } from '../providers/ProvidersDeCarrito';
import ProductoCarrito from './ProductoCarrito';
/* import { LiaSignInAltSolid } from 'react-icons/lia';
 */


const ListaCarrito  = () => {
    
    const { listaCarrito } = useListadoCarrito();

    console.log(listaCarrito)
 

    return(
        <div className='contenedor-lista-carrito'>
            {listaCarrito.map((producto, i) => (
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
    )
}

export default ListaCarrito