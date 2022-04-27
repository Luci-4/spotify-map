import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    display: block;
    text-align:center;
    padding: 2rem 2rem;
    margin: 2.5rem auto;
    background: transparent;
    border: 1px solid #fff;
    border-radius: 4px;
    color: #fff;
    font-size: 1.25rem;
    text-decoration:none;

`

function DiscoverButton({ children }) {
    return <StyledLink to='/mapper'>Discover</StyledLink>
}   

export default DiscoverButton