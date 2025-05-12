import ListaProductos from './componentes/ListaProductos';
import Menu from './componentes/Menu'
import { FiltroProvider } from './providers/ProvidersDeFiltros';
import BotonCambioPagina from './componentes/BotonCambioPagina';
import { ListadoCarrito } from './providers/ProvidersDeCarrito'
 
function Inicio() {
  return (
    <div className="App">

        <ListadoCarrito>

          <FiltroProvider>

                <Menu />
                 <ListaProductos />

            </FiltroProvider>
            
         <BotonCambioPagina />
         
        </ListadoCarrito>

    </div>
  );
}

export default Inicio;
