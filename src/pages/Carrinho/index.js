import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useCarrinhoContext } from "common/context/Carrinho";
import { usePagamentoContext } from "common/context/Pagamento";
import { UsuarioContext } from "common/context/Usuario";
import Produto from "components/Produto";
import { useContext } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  PagamentoContainer,
  TotalContainer,
  Voltar,
} from "./styles";

function Carrinho() {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const navigate = useNavigate();

  const { carrinho, valorTotalCarrinho, efetuarCompra } = useCarrinhoContext();
  const { saldo = 0 } = useContext(UsuarioContext);
  const { tiposDePagamento, formaDePagamento, mudarFormaPagamento } =
    usePagamentoContext();

  const total = useMemo(
    () => saldo - valorTotalCarrinho,
    [saldo, valorTotalCarrinho]
  );

  return (
    <Container>
      <Voltar
        onClick={() => {
          navigate("/feira");
        }}
      />
      <h2>Carrinho</h2>
      {carrinho.map((produto) => (
        <Produto {...produto} key={produto.id} />
      ))}
      <PagamentoContainer>
        <Select
          value={formaDePagamento.id}
          onChange={(e) => mudarFormaPagamento(e.target.value)}
        >
          {tiposDePagamento.map((pagamento) => (
            <MenuItem value={pagamento.id} key={pagamento.id}>
              {pagamento.nome}
            </MenuItem>
          ))}
        </Select>
        <InputLabel> Forma de Pagamento </InputLabel>
      </PagamentoContainer>
      <TotalContainer>
        <div>
          <h2>Total no Carrinho: </h2>
          <span>R$ {Number(valorTotalCarrinho)}</span>
        </div>
        <div>
          <h2> Saldo: </h2>
          <span> R$ {Number(saldo).toFixed(2)}</span>
        </div>
        <div>
          <h2> Saldo Total: </h2>
          <span> R$ {Number(total).toFixed(2)} </span>
        </div>
      </TotalContainer>
      <Button
        onClick={() => {
          efetuarCompra();
          setOpenSnackbar(true);
        }}
        disabled={!total || carrinho.length === 0}
        color="primary"
        variant="contained"
      >
        Comprar
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
      >
        <MuiAlert onClose={() => setOpenSnackbar(false)} severity="success">
          Compra feita com sucesso!
        </MuiAlert>
      </Snackbar>
    </Container>
  );
}

export default Carrinho;
