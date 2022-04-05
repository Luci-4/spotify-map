import style from 'components/basic/UserInput/UserInput.module.scss'

function UserInput(props) {
    const { setQuery } = props
    function search(e) {
        e.preventDefault()
        const query = e.target?.children[0]?.value
        setQuery(query)
    }

    return (
        <form onSubmit={search} className={style.inputWrapper}>
            <input type='text' className={style.input}></input>
        </form>
    )
}

export default UserInput
