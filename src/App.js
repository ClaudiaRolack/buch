
import { NavBar } from "./componentes/NavBar";
import {Categoria} from "./componentes/pages/Categoria";
import { Inicio } from "./componentes/pages/Inicio";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer";
import { Footer } from "./componentes/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export const App = () => {
  return (

    <BrowserRouter>


      <NavBar />

      <main>

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path= '/ver-detalle/:id' element={<ItemDetailContainer />} />
        <Route path='/categorias/:categoria' element={<Categoria />} />
        <Route path='/categorias' element={<Categoria />} />
        <Route path='/contacto' element={<p>Contacto</p>} />
      </Routes>
      
      </main>

      <Footer />


    </BrowserRouter>
  );
}