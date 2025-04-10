import Link from "next/link"

export default function Profile(){
    return (
        <div>
            <h3>Profile page</h3>
            <Link href = "/products">Products Page</Link>
        </div>
    )
}