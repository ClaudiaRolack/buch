import {NavBar} from "./componentes/NavBar";
import {ItemListContainer} from "./componentes/ItemListContainer";
import {Footer} from "./componentes/Footer";

export const App = () => {
  return (
    <div className="App">
      
        <NavBar />

        <ItemListContainer greeting="Bienvenidos a Buch!"/>

        <Footer />
      
    </div>
  );
}