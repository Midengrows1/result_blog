import {Link, useNavigate} from 'react-router-dom'
import { faBackward, faFileLines, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';


const RightAligned = styled.div`
    display: flex;
    gap: 20px;
    justify-content: flex-end;
`
const StyledLink = styled(Link)`
    display: inline-block;
    margin: 20px 0;
    width: min(120px, 100%);
    text-align: center;
    border-radius: 8px;
    font-weight: 600;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
    font-size: 19px;
    border: 2px solid;
`
const ControlPanelContainer = ({ className }) => {
    const navigate = useNavigate();
    return (
        <div className={className}>
            <RightAligned>
                <StyledLink to="/register">Войти</StyledLink>
            </RightAligned>
            <RightAligned>
                    <FontAwesomeIcon icon={faBackward} size='xl' onClick={() => navigate(-1)} style={{cursor: 'pointer'}} />
                    <Link to={"/post"}><FontAwesomeIcon icon={faFileLines} size="xl" color='#000'/></Link>                
                    <Link to={"/users"}><FontAwesomeIcon icon={faUsers} size="xl"  color='#000'/></Link>            
            </RightAligned>
        </div>
    );
};

export const ControlPanel  = styled(ControlPanelContainer)`
    
`;