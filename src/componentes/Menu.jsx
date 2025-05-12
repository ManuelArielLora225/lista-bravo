import React, { useContext } from 'react';
import '../hojas-estilos/Menu.css'
import { useFiltro } from '../providers/ProvidersDeFiltros';


const Menu = () => {

   const  { elegirFiltro } = useFiltro();

   const ponerFiltro = (e) => {
        elegirFiltro(e.target.textContent)
   }
     
    return (
       <div className='contenedor-menu'>
            <ul>
                <li><a onClick={ponerFiltro}>Todos</a></li>
                <li><a onClick={ponerFiltro}>Aceites y grasas</a></li>
                <li><a onClick={ponerFiltro}>Condimentos</a></li>
                <li><a onClick={ponerFiltro}>Panadería</a></li>
                <li><a onClick={ponerFiltro}>Lácteos</a></li>
                <li><a onClick={ponerFiltro}>Enlatados</a></li>
                <li><a onClick={ponerFiltro}>Pastas y arroz</a></li>
                <li><a onClick={ponerFiltro}>Legumbres</a></li>
                <li><a onClick={ponerFiltro}>Snacks</a></li>
                <li><a onClick={ponerFiltro}>Untables</a></li>
                <li><a onClick={ponerFiltro}>Harinas</a></li>
                <li><a onClick={ponerFiltro}>Bebidas</a></li>
                <li><a onClick={ponerFiltro}>Papel y plástico</a></li>
                <li><a onClick={ponerFiltro}>Bebé</a></li>
                <li><a onClick={ponerFiltro}>Higiene personal</a></li>
                <li><a onClick={ponerFiltro}>Limpieza</a></li>
                <li><a onClick={ponerFiltro}>Cárnicos</a></li>
            </ul>
        </div>
    )
}


export default Menu