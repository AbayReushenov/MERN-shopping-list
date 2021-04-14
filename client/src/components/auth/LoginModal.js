import React, { useState, useEffect, useCallback } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

const LoginModal = ({
  isAuthenticated,
  error,
  login,
  clearErrors
}) => {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);

  const handleToggle = useCallback(() => {
    // Clear errors
    clearErrors();
    setModal(!modal);
  }, [clearErrors, modal]);

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const user = { email, password };

    // Attempt to login
    login(user);
  };

  useEffect(() => {
    // Check for register error
    if (error.id === 'LOGIN_FAIL') {
      setMsg(error.msg.msg);
    } else {
      setMsg(null);
    }

    // If authenticated, close modal
    if (modal) {
      if (isAuthenticated) {
        handleToggle();
      }
    }
  }, [error, handleToggle, isAuthenticated, modal]);

  return (
    <div>
      <NavLink onClick={handleToggle} href="#">
        Вход
      </NavLink>

      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Введите Ваш имейл и пароль</ModalHeader>
        <ModalBody>
          {msg ? <Alert color="danger">{msg}</Alert> : null}
          <Form>
            <FormGroup>
              <Label for="email">Имейл</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email по всей форме"
                className="mb-3"
                onChange={handleChangeEmail}
              />

              <Label for="password">Пароль</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="пароль, минимум 6 знаков"
                className="mb-3"
                onChange={handleChangePassword}
              />
              <Button
                color="dark"
                style={{ marginTop: '2rem' }}
                block
                onClick={handleOnSubmit}
              >
                Отправить
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(LoginModal);
