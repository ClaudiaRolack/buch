
import {NavBar} from "./componentes/NavBar";
import {ItemListContainer} from "./componentes/ItemListContainer";
import {Footer} from "./componentes/Footer";
import { BrowserRouter } from "react-router-dom";




export const App = () => {
  return (
    
    <BrowserRouter>
    <div className="App">

        <NavBar />

        <ItemListContainer />

        <Footer />
      
    </div>
    </BrowserRouter>
  );
}