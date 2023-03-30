import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'

function SystemLogin() {
  return (

    <div className='login'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Endereço de E-mail</Form.Label>
        <Form.Control type="email" placeholder="E-mail" />
        <Form.Text className="text-muted">
        Nunca compartilharemos seu e-mail com mais ninguém.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="senha" placeholder="Senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Lembre-me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Entrar
      </Button>
    </Form>
    </div>
  );
}

export default SystemLogin;