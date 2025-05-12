import Inicio from "./Inicio";
import Carrito from "./Carrito";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
  </BrowserRouter>
 
  );
}

export default App;
