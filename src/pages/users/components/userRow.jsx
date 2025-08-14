import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TableRow } from './TableRow/TableRow';
import { useState } from 'react';
import { useServerRequest } from './../../../hooks/use-server';
const UserRowContainer = ({
  className,
  id,
  login,
  registeredAt,
  roleId: userRoleId,
  roles,
  onUserRemove,
}) => {
  const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);
  const [initialRoleId, setInitialRoleId] = useState(userRoleId);
  const requestServer = useServerRequest();
  const onRoleChange = ({ target }) => {
    setSelectedRoleId(target.value);
  };
  const onRoleSave = (userId, newUserRoleId) => {
    requestServer('updateUserRole', userId, newUserRoleId).then(() => {
      setInitialRoleId(newUserRoleId);
    });
  };
  const isSaveButtonDisabled = +initialRoleId === +selectedRoleId;

  return (
    <div className={className}>
      <TableRow border={true}>
        <div className="login-column">{login}</div>
        <div className="registered-at-column">{registeredAt}</div>
        <div className="role-column">
          <select name="" id="" value={selectedRoleId} onChange={onRoleChange}>
            {roles.map(({ id: roleId, name: roleName }) => (
              <option key={roleId} value={roleId}>
                {roleName}
              </option>
            ))}
          </select>
          <button
            onClick={() => onRoleSave(id, selectedRoleId)}
            disabled={isSaveButtonDisabled}
            className="save-button"
          >
            <FontAwesomeIcon icon={faSave} size="xl" />
          </button>
        </div>
      </TableRow>
      <button className="delete-button" onClick={onUserRemove}>
        <FontAwesomeIcon icon={faTrash} size="xl" />
      </button>
    </div>
  );
};

export const UserRow = styled(UserRowContainer)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  .role-column {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  & select {
    font-size: 16px;
    padding: 0 5px;
  }
  button {
    border: none;
  }
  .save-button:disabled {
    opacity: 0.4;
  }
`;
