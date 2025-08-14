import React, { useEffect, useState } from 'react';
import { TableRow, UserRow } from './components';
import { useServerRequest } from '../../hooks';
import styled from 'styled-components';
import { Content } from '../../components';
import { ROLE } from '../../constants';
const UsersContainer = ({ className }) => {
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const requestServer = useServerRequest();
  useEffect(() => {
    Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')]).then(
      ([usersRes, rolesRes]) => {
        if (usersRes.error || rolesRes.error) {
          setErrorMessage(usersRes.error || rolesRes.error);
          return;
        }
        setUsers(usersRes.res);
        setRoles(rolesRes.res);
      },
    );
  }, [requestServer, shouldUpdateUserList]);

  const onUserRemove = (userId) => {
    requestServer('removeUser', userId).then(() => {
      setShouldUpdateUserList(!shouldUpdateUserList);
    });
  };

  return (
    <div className={className}>
      <Content error={errorMessage}>
        <h2>Полбзователи</h2>
        <div>
          <TableRow>
            <div className="login-column">Логин</div>
            <div className="registered-at-column">Дата Регистрации</div>
            <div className="role-column">Роль</div>
          </TableRow>
          {users.map(({ id, login, registeredAt, roleId }) => (
            <UserRow
              key={id}
              id={id}
              login={login}
              roleId={roleId}
              registeredAt={registeredAt}
              roles={roles.filter(({ id: roleId }) => roleId !== ROLE.GUEST)}
              onUserRemove={() => onUserRemove(id)}
            />
          ))}
        </div>
      </Content>
    </div>
  );
};

export const Users = styled(UsersContainer)`
  h2 {
    margin: 32px 0;
  }
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 570px;
`;
