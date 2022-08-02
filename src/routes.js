import { UsuarioProvider } from "common/context/Usuario";
import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <UsuarioProvider>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/feira" element={<Feira />} />
          <Route exact path="/carrinho" element={<Carrinho />} />
        </Routes>
      </UsuarioProvider>
    </BrowserRouter>
  );
};
export default Router;
