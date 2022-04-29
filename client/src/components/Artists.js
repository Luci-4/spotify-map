import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ArtistWrapper = styled.li`
    background-color: transparent;
    width: 100%;
    padding: 1rem 2rem;
    &:not(:first-child) {
        border-top: 1px solid black;
    }
`

const Description = styled.div`
    margin: auto;
    display: flex;
    justify-content: flex-start;
    width: fit-content;
    margin: auto;

    p {
        margin-left: 1rem;
        background-color: #b3d5e3;
    }

    img {
        display: block;
        width: 20%;
        border-radius: 20px;
    }
`

function Artists({ name, images,id }) {
    const navigate = useNavigate()
    return (
            <ArtistWrapper onClick={() => navigate(`/mapper?id=${id}`)}>
                <Description>
                    <img src={images[0]?.url} alt={`${name} logo`} />
                    <p>{name}</p>
                </Description>
            </ArtistWrapper>
    )
}

export default Artists
