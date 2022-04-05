function ArtistSearch(props) {
    const { name, images, key } = props

    return (
        <li key={key}>
            <img src={images[0]?.url} alt='Some related artist' />
            <p>{name}</p>
        </li>
    )
}

export default ArtistSearch
