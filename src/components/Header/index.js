import OpcoesHeader from "../OpcoesHeader"
import Logo from "../../components/Logo"
import Sacola from "../IconesHeader"
import styled from 'styled-components'

const HeaderContent = styled.div`
background-color: #000000;
display: flex;
justify-content: center;
`

function Header() {
    return (

        <HeaderContent>
                <Logo/>
                <OpcoesHeader/>
                <Sacola/>
      </HeaderContent>
  );
}

export default Header
