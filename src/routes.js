import UsuarioContext from "common/context/Usuario";
import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Router = () => {
  const [nome, setNome] = useState("");
  const [saldo, setSaldo] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <UsuarioContext.Provider value={{ nome, setNome, saldo, setSaldo }}>
              <Login />
            </UsuarioContext.Provider>
          }
        />
        <Route exact path="/feira" element={<Feira />} />
        <Route exact path="/carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
