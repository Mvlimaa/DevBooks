import Header from "../src/components/Header"
import styled from 'styled-components';
import Pesquisa from "../src/components/Pesquisa"

const AppContent = styled.div`
width: 100vw;
height: 100vh;
background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);

li {
list-style: none;
}

`

function App() {
    return (
        <AppContent>
          <Header/>
          <Pesquisa/>
        </AppContent>
  );
}

export default App
