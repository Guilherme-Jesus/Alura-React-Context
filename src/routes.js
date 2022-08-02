import {UsuarioProvider} from "common/context/Usuario";
import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <UsuarioProvider>
              <Login />
            </UsuarioProvider>
          }
        />
        <Route exact path="/feira" element={<Feira />} />
        <Route exact path="/carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
