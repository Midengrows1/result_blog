import { Link, useNavigate } from 'react-router-dom';
import { faBackward, faFileLines, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

// Обёртка
const PanelWrapper = styled.div``;

const RightAligned = styled.div`
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    margin: 16px 0;
`;

const StyledLink = styled(Link)`
    display: inline-block;
    width: min(120px, 100%);
    padding: 5px 0;
    text-align: center;
    border-radius: 8px;
    font-weight: 600;
    font-size: 19px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
    border: 2px solid;
    text-decoration: none;
    color: inherit;

    &:hover {
        opacity: 0.9;
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

const ControlPanelContainer = (className ) => {
    const navigate = useNavigate();

    return (
        <PanelWrapper className={className}>
            <RightAligned>
                <StyledLink to="/register">Войти</StyledLink>
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
