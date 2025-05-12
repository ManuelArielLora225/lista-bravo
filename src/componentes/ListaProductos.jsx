import React from 'react';
import Productos from './Productos';
import { DatosProductos } from '../datos/DatosProductos'
import '../hojas-estilos/ListaProductos.css'
import { useFiltro } from '../providers/ProvidersDeFiltros';

const ListaProductos = () => {

    const  { filtro } = useFiltro();
   

 

    const ProductosFiltrados = DatosProductos.filter(producto => filtro === "Todos" || producto.categoria.includes(filtro));


    return(
    <div className='contenedor-lista-productos'>
        {ProductosFiltrados.map((producto,i) => (
            <Productos 
            key={i}
            id={producto.id}
            nombre={producto.nombre}
            medida={producto.medida}
            precio={producto.precio}
            />
        ))}
    </div>
    )

    
}



export default ListaProductos


/*     return(
    
    <div className='contenedor-lista-productos'>
        {DatosProductos.map((producto,i) => (
            <Productos 
            key={i}
            nombre={producto.nombre}
            medida={producto.medida}
            precio={producto.precio}
            />
        ))}
    </div>
    ) */