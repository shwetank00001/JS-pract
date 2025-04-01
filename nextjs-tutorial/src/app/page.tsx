import Link from 'next/link'

export default function Home(){
    return (
    <div>
        Hello, this is the home page for our website.
        <Link href="/profile">Go to profile page</Link>
    </div>
)
}