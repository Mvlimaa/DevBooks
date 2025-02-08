import Perfil from"../../Images/perfil.svg"
import Sacola from"../../Images/sacola.svg"
import styled from 'styled-components'

const icones = [Perfil, Sacola]

const Icone = styled.li`
margin-right: 40px;
width: 25px
`
const Icones = styled.ul`
display: flex;
align-items: center;
`

function sacola() {
    return (
        <Icones>
            { icones.map( (icone) => (
              <Icone><img src={icone} alt='icone'></img></Icone>
            )) }
        </Icones>
  );
}

export default sacola