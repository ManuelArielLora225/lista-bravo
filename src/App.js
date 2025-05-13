import Inicio from "./Inicio";
import Carrito from "./Carrito";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ListadoCarrito } from "./providers/ProvidersDeCarrito";
import { ToastContainer } from 'react-toastify';

 

function App() {
  return (
    <>
 
    <BrowserRouter>
     <ListadoCarrito>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
         </ListadoCarrito>
    </BrowserRouter>
  </>
  
 
  );
}

export default App;
