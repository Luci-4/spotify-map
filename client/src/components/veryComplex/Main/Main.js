import Related from 'components/complex/Related/Related'

function Main(props) {
    const { access_token, id } = props
    return <Related access_token={access_token} id={id} />
}
export default Main
