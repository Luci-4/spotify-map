function Related(props){
    const {name,images,genres} = props

    return(
        <li className="related-wrapper">
            <div className="related">
                <div className="legend">
                    <p className="genres">{genres[0] || '\t'}</p>
                    <p className="artist-name">{name}</p>
                </div>
                <img src={images[0]?.url} alt="artist"/>
            </div>
        </li>
    )
}

export default Related