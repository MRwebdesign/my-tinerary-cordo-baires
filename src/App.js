import '../src/index.css'
import FooterLayout from './layouts/FooterLayout'
import PagNotFoundLayout from './layouts/PagNotFoundLayout';
import Header from './layouts/Header'
import { Route, Routes } from "react-router-dom";
import Main from './layouts/Main';
function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="*" element={<PagNotFoundLayout/>}/>
      <Route path="/home" element={<Main/>}/>
     </Routes>
    <FooterLayout></FooterLayout>
    </>
  );
}

export default App;
