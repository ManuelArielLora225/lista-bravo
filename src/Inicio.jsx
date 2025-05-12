import ListaProductos from './componentes/ListaProductos';
import Menu from './componentes/Menu'
import { FiltroProvider } from './providers/ProvidersDeFiltros';
import BotonCambioPagina from './componentes/BotonCambioPagina';

 
function Inicio() {
  return (
    <div className="App">

          <FiltroProvider>

                <Menu />
                 <ListaProductos />

            </FiltroProvider>
            
         <BotonCambioPagina />
         
    </div>
  );
}

export default Inicio;
