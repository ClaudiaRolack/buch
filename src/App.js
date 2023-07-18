
import { NavBar } from "./componentes/NavBar";
import { ItemListContainer } from "./componentes/ItemListContainer";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer";
import { Footer } from "./componentes/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Categoria} from "./componentes/pages/Categoria";
import { ItemCount } from "./componentes/ItemCount";
import {Item} from "./componentes/Item"





export const App = () => {
  return (

    <BrowserRouter>


      <NavBar />

      <main>

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path= '/ver-detalle/:id' element={<ItemDetailContainer/>} />
        <Route path='/categorias/:id' element={<Categoria />} />
        <Route path='/contacto' element={<p>Soy contacto</p>} />
      </Routes>
      
      </main>

      <Footer />


    </BrowserRouter>
  );
}