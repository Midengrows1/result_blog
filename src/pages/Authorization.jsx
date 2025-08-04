import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../bff';
import { useEffect, useState } from 'react';
import { Input, Button } from '../components';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { setUser } from '../actions';
import { selectUserRole } from '../selectors';
import { ROLE } from '../constants';
const authFormSchema = yup.object().shape({
  login: yup
    .string()
    .required('Заполните логин')
    .matches(/^\w+$/, 'Неверный логин. Допускаются только буквы и цыфры')
    .min(3, 'Неверный логин. Минимум 3 символа')
    .max(15, 'Неверный логин. Максимум 15 символов'),
  password: yup
    .string()
    .required('заполните пароль')
    .matches(/^[\w#%]+$/, 'Неверно заполнен пароль.')
    .min(6, 'Неверный логин. Минимум 6 символа')
    .max(30, 'Неверный логин. Максимум 30 символов'),
});

const StyledLink = styled(Link)`
  text-align: center;
  margin: 20px 0;
  text-decoration: underline;
  font-size: 18px;
`;

const ErrorMessage = styled.div`
  background-color: #fcadad;
  font-size: 18px;
  margin: 10px 0;
  padding: 10px;
`;
const AuthorizationContainer = ({ className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
    resolver: yupResolver(authFormSchema),
  });
  const [serverError, setServerError] = useState(null);
  const roleId = useSelector(selectUserRole);
  const onSubmit = ({ login, password }) => {
    server.authorize(login, password).then(({ error, res }) => {
      if (error) {
        setServerError(`Ошибка зпроса: ${error}`);
        return;
      }
      dispatch(setUser(res));
    });
  };
  const store = useStore();
  useEffect(() => {
    let currentWasLogout = store.getState().app.wasLogout;
    const unsubscribe = store.subscribe(() => {
      let prevWasLogout = currentWasLogout;
      currentWasLogout = store.getState().app.wasLogout;

      if (currentWasLogout !== prevWasLogout) {
        reset();
      }
    });
    return unsubscribe;
  }, [reset, store]);

  const formError = errors?.login?.message || errors?.password?.message || serverError;
  const errorMessage = formError || serverError;

  if (roleId !== ROLE.GUEST) {
    navigate('/');
  }

  return (
    <div className={className}>
      <h2>Авторизация</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Логин"
          {...register('login', {
            onChange: () => setServerError(null),
          })}
        />
        <Input
          type="password"
          placeholder="Пароль"
          {...register('password', {
            onChange: () => setServerError(null),
          })}
        />
        <Button type="submit" disabled={!!formError}>
          Авторизоваться
        </Button>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <StyledLink to="/register">Регистрация </StyledLink>
      </form>
    </div>
  );
};

export const Authorization = styled(AuthorizationContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > form {
    width: 260px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
