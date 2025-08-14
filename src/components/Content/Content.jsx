import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Content = ({ children, error }) => {
  return error ? (
    <Div>
      <h2>Ошибка</h2>
      <h2>{error}</h2>
    </Div>
  ) : (
    children
  );
};
