import styled from 'styled-components'

const StyledTitle = styled.h1`
    font-size: 2rem;
    font-weight:600;
    text-align:center;
`

function Title({children}){
    return <StyledTitle>{children}</StyledTitle>
}

export default Title