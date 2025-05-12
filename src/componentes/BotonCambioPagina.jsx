import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { CiHome } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import '../hojas-estilos/BotonCambioPagina.css'


const BotonCambioPagina = () => {
    
const Direccion = useLocation();

const enInicio = Direccion.pathname === '/';

    return (

        <div className='contenedor-icono'>
        <Link to={enInicio ? '/carrito' : '/'} className='icono'>
        {enInicio ? <LuShoppingCart /> : <CiHome />}
        </Link>
        </div>
    )

}



export default BotonCambioPagina



