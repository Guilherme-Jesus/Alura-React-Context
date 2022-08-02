import { Button, Input, InputAdornment, InputLabel } from "@material-ui/core";
import { UsuarioContext } from "common/context/Usuario";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Container, InputContainer, Titulo } from "./styles";

function Login() {
  const navigate = useNavigate();
  const { nome, setNome, saldo, setSaldo } = useContext(UsuarioContext);
  return (
    <Container>
      <Titulo>Insira o seu nome</Titulo>
      <InputContainer>
        <InputLabel>Nome</InputLabel>
        <Input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Saldo</InputLabel>
        <Input
          type="number"
          value={saldo}
          onChange={(e) => setSaldo(e.target.value)}
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        />
      </InputContainer>{" "}
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          navigate("/feira");
        }}
      >
        Avançar
      </Button>
    </Container>
  );
}

export default Login;
