import styled from 'styled-components';
import { ControlPanel, Logo } from './components';

const Description = styled.div`
  font-style: italic;
`;
const HeaderContainer = ({ className }) => (
  <header className={className}>
    <Logo />
    <Description>
      Веб-технологии
      <br />
      Написание кода
      <br />
      Разбор ошибок
    </Description>
    <ControlPanel />
  </header>
);
export const Header = styled(HeaderContainer)`
  position: fixed;
  width: 1000px;
  height: 120px;
  padding: 20px 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  z-index: 100;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Montserrat', sans-serif;
`;
Header.defaultProps = {
  className: 'header',
};
