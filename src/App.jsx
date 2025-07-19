import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Div = styled.div`
  text-align: center;
`
function App() {   

  return (
    <>
    <FontAwesomeIcon icon={faCoffee}/>
      <Div>123</Div>
    </>
  )
}

export default App
