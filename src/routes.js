import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
            <Login
              nome={nome}
              setNome={setNome}
              saldo={saldo}
              setSaldo={setSaldo}
            />
          }
        />
        <Route exact path="/feira" element={<Feira />} />
        <Route exact path="/carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
