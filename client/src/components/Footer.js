import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledFooter = styled.div`
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 5vh;
`

const LinkWrapper = styled.div`
    width: 15%;
    display: flexbox;
    flex-direction: row;
    justify-content: space-between;
    margin:auto;
`

const StyledNavlink = styled(NavLink)`
    display: block;
    width: 30%;
    height: 4px;
    border-radius: 8px;
    background-color: #fff;

    &.active {
        background-color: #2C856B;
    }
`

function Footer() {
    return (
        <StyledFooter>
            <LinkWrapper>
                <StyledNavlink to='/'/>
                <StyledNavlink to='/search' />
                <StyledNavlink to='/mapper' />
            </LinkWrapper>
        </StyledFooter>
    )
}

export default Footer
