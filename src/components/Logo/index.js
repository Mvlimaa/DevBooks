import logo from "../../Images/logo.svg"
import styled from "styled-components"

const LogoContent = styled.div`
display: flex;
font-size: 35px;
`
const LogoImg = styled.img`
margin-right: 10px;
display: flex;`
const Text = styled.p`
color: aliceblue;
display: flex;
`

function Logo() {
    return(
        <LogoContent>
          
          <LogoImg 
          src={logo} alt='logo'
          />
          <Text><strong>DevBooks</strong></Text>
        </LogoContent>
    )

}
export default Logo