import Inicio from "./Inicio";
import Carrito from "./Carrito";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ListadoCarrito } from "./providers/ProvidersDeCarrito";
 

function App() {
  return (
  <ListadoCarrito>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
    </BrowserRouter>
  </ListadoCarrito>  
 
  );
}

export default App;
