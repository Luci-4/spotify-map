import style from 'components/basic/UserInput/UserInput.module.scss'

function UserInput(props) {
    const { setQuery } = props
    function search(e) {
        e.preventDefault()
        const query = e.target?.children[0]?.value
        setQuery(query)
    }

    return (
        <form onSubmit={search}>
            <input type='text'></input>
        </form>
    )
}

export default UserInput
