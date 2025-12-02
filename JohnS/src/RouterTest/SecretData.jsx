import {Link} from 'react-router-dom'

function SecretData(){
    const names = [
        {
            id: 1,
            name: "Shwetank"
        },
        {
            id: 2,
            name: "Mishra"
        },
        {
            id: 3,
            name: "Welocalize"
        },
]

const ele = names.map((item) => {
    return (
        <div key={item.id}>
            <Link to={`/welcome/${item.name}`}>{item.name}</Link>
        </div>
    )
})
    return (
        <>
            <p>Secret Data is this</p>
            {ele}
        </>
    )
}

export default SecretData