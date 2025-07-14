import { Link } from "react-router"

export default function Home() {
    return (
        <>
        <h1>Home</h1>

        <Link to={"login/"} >Login</Link>
        </>
    )
}