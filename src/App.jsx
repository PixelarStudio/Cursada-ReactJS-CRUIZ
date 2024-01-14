import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./componentes/CartContext/CartContext";
import Carrito from "./componentes/Carrito/Carrito";
import Checkout from "./componentes/Checkout/Checkout";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer bienvenida="BIENVENIDOS A PRO GAMER" />}          />
          <Route path="/categorias/:categoria" element={<ItemListContainer bienvenida="BIENVENIDOS A PRO GAMER" />}          />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={ <Checkout /> } />
          <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
