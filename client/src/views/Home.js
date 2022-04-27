import Title from '../components/Title'
import styled from 'styled-components'
import DiscoverButton from '../components/DiscoverButton'

const CenterWrapper = styled.div`
    position:relative;
    width: fit-content;
    margin: auto;
    transform:translateY(25vh);
`

function Home() {
    return (
        <>
            <CenterWrapper>
                <Title>Broaden your horizons</Title>
                <DiscoverButton />
            </CenterWrapper>
        </>
    )
}

export default Home
