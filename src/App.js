
import { CartProvider } from "./componentes/CartContext";
import { NavBar } from "./componentes/NavBar";
import { Categoria } from "./componentes/pages/Categoria";
import { Inicio } from "./componentes/pages/Inicio";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer";
import { Cart } from "./componentes/Cart";
import { Footer } from "./componentes/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";


export const App = () => {
  return (

    <CartProvider>

      <BrowserRouter>

        <NavBar />

        <main>

          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/ver-detalle/:id' element={<ItemDetailContainer />} />
            <Route path='/categorias/:categoria' element={<Categoria />} />
            <Route path='/categorias' element={<Categoria />} />
            <Route path='/contacto' element={<p>Contacto</p>} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>

        </main>

        <Footer />

      </BrowserRouter>

      {/* <ToastContainer /> */}

    </CartProvider>


  );
}