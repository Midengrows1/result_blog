import { Link, useNavigate } from 'react-router-dom';
import { faBackward, faFileLines, faSignOut, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Button } from '../../../Button/Button';
import { ROLE } from '../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole, selectUserLogin, selectUserSession } from '../../../../selectors';
import { logout } from '../../../../actions';
// Обёртка
const PanelWrapper = styled.div``;

const RightAligned = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  margin: 16px 0;
  align-items: center;
  & > strong {
    font-size: 18px;
    text-transform: capitalize;
  }
`;

const IconButton = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #000;

  &:hover {
    opacity: 0.7;
  }
`;

const IconLink = styled(Link)`
  color: #000;

  &:hover {
    opacity: 0.7;
  }
`;

const ControlPanelContainer = (className) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roleId = useSelector(selectUserRole);
  const login = useSelector(selectUserLogin);
  const session = useSelector(selectUserSession);

  return (
    <PanelWrapper className={className}>
      <RightAligned>
        {roleId === ROLE.GUEST ? (
          <Button>
            <Link to="/login">Войти</Link>
          </Button>
        ) : (
          <>
            <strong>{login}</strong>
            <IconButton icon={faSignOut} size="xl" onClick={() => dispatch(logout(session))} />
          </>
        )}
      </RightAligned>
      <RightAligned>
        <IconButton icon={faBackward} size="xl" onClick={() => navigate(-1)} />
        <IconLink to="/post">
          <FontAwesomeIcon icon={faFileLines} size="xl" />
        </IconLink>
        <IconLink to="/users">
          <FontAwesomeIcon icon={faUsers} size="xl" />
        </IconLink>
      </RightAligned>
    </PanelWrapper>
  );
};

export const ControlPanel = styled(ControlPanelContainer)``;
