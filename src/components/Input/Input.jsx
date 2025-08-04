import styled from 'styled-components';
const InputContainer = ({ className, width, ...props }) => {
  return <input type="text" className={className} {...props} />;
};

export const Input = styled(InputContainer)`
  width: ${({ width = '100%' }) => width};
  height: 40px;
  margin: 0 0 10px;
  border: 1px solid;
  padding: 10px;
  font-size: 18px;
`;
