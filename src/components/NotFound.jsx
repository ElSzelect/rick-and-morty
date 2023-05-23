import { Link } from "react-router-dom"

export default function NotFound(props) {
    return (
        <div>
            <h1>404 not Found</h1>
            <Link to='/home'>
                <h2>Volver a Inicio</h2>
            </Link>
        </div>
    )
}