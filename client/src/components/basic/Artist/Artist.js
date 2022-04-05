function Artist(props) {
    const { name, images, genres, setId, id } = props

    // add onClick handler for related
    function onClickHandler() {
        if(typeof setId !== 'undefined'){
            setId(id)
        }
    }

    return (
        <li onClick={onClickHandler}>
            <p>{genres[0]}</p>
            <img src={images[0]?.url} alt='Some artist' />
            <p>{name}</p>
        </li>
    )
}

export default Artist
