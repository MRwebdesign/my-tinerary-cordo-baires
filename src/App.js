import { Route, Routes } from "react-router-dom";
import AutoToTop from "./components/AutoToTop";
import "./index.css";
import Header from "./layouts/Header";
import Main from "./layouts/Main";

function App() {
  return (
    <>
        <Header />
          <AutoToTop/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          {/* En este caso es "Carrousel" porque no tenemos otra cosa pero deberia ser el layout de Cities, Hotels, etc */}
          {/* Aca se puede usar la linea de abajo para el error404, esto lleva a una direccion inexistente*/}
          <Route path="*" element={<Main/>}/>
        </Routes>                                      
    </>
  );
}

export default App;
