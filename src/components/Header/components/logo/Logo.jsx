import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const LargeText = styled.p`
    font-size: 32px;
    font-weight: bold;
`

const SmallText = styled.p`
    font-size: 18px;
    font-weight: normal;
`
const LogoContainer = ({ className }) => (
    <Link className={className} to={"/"}>
        <FontAwesomeIcon icon={faCode} size='4x' />
        <div>
            <LargeText>Блог</LargeText>
            <SmallText>Веб-разработчика</SmallText>
        </div>
    </Link>
)
export const Logo = styled(LogoContainer)`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    color: #000;
`

