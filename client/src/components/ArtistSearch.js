import styled from 'styled-components'

const StyledInput = styled.input`
    background-color: transparent;
    color: #2c856b;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
    border-right: none;
    border-left:none;
    outline:none;
    text-align: center;
    font-weight: 300;
    font-size: 2.75rem;
    height:5rem;
    width:100vw;
    `

function handleSubmit(event) {
    event.preventDefault()
    const input = event.target?.children[0]
    
}

function ArtistSearch() {
    return (
        <form onSubmit={handleSubmit}>
            <StyledInput placeholder='Find you loved artist here' />
        </form>
    )
}

export default ArtistSearch
