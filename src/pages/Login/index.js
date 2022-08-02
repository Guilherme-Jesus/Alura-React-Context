import {Button, Input, InputAdornment, InputLabel} from '@material-ui/core';

import {Container, InputContainer, Titulo} from './styles';

function Login() {
  return (
    <Container>
      <Titulo>
        Insira o seu nome
      </Titulo>
      <InputContainer>
        <InputLabel>
          Nome
        </InputLabel>
        <Input
  type =
      "text" / >
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Saldo
        </InputLabel><
      Input
  type = "number"
  startAdornment = {
          <InputAdornment position="start">
            R$
          </InputAdornment>
        }
      />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
      >
        Avançar
      </Button>
    </Container>
  )
};

export default Login;