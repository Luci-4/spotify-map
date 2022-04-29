import styled from 'styled-components'
import Artists from './Artists'

const StyledList = styled.ul`
    background-color: #a1c3d1;
    border-radius: 22px;
    width: 80vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    list-style: none;
`

function SearchResults({ searched }) {
    return (
        <StyledList>
            {searched.slice(0, 5).map((artist, index) => (
                <Artists key={index} {...artist} />
            ))}
        </StyledList>
    )
}

export default SearchResults
