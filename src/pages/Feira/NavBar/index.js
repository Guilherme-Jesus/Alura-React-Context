import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {ReactComponent as Logo} from "assets/logo.svg";
import {useCarrinhoContext} from "common/context/Carrinho";
import {Voltar} from "pages/Carrinho/styles";
import {useNavigate} from "react-router-dom";

import {Nav} from "./styles";

export default function NavBar() {
  const {quantidadeProdutos} = useCarrinhoContext();
  const navigate = useNavigate();
  return (
    <Nav>
      <Voltar
  onClick = { () => { navigate("/"); } } />
      <Logo / > < IconButton
  disabled = {!quantidadeProdutos} onClick = {
    () => { navigate("/carrinho"); }
  } > <Badge color = "primary" badgeContent = {quantidadeProdutos}>
                                             <ShoppingCartIcon />
                                             </Badge>
      </IconButton><
                                             /Nav>
  );
}
