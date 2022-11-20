import { Button, Input, InputLabel, InputAdornment } from '@material-ui/core'
import { Container, Titulo, InputContainer } from './styles'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UsuarioContext } from 'common/context/Usuario'

function Login () {
  const navigate = useNavigate()
  const { nome, setNome, saldo, setSaldo } = useContext(UsuarioContext)
  return (
    <Container>
      <Titulo>Insira o seu nome</Titulo>
      <InputContainer>
        <InputLabel>Nome</InputLabel>
        <Input
          type='text'
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Saldo</InputLabel>
        <Input
          type='number'
          value={saldo}
          onChange={(e) => setSaldo(e.target.value)}
          startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
          required
        />
      </InputContainer>
      <Button
        variant='contained'
        color='primary'
        disabled={nome.length <= 3}
        onClick={() => {
          navigate('/feira')
        }}
      >
        Avançar
      </Button>
    </Container>
  )
}

export default Login
