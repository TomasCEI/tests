import {Routes, Route, Outlet, Link} from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <nav className="nav">
                <ul>
                <li>
                    <Link to="/">Bienvenida (login)</Link>
                </li>
                <li>
                    <Link to="/tasks">tareas</Link>
                </li>
                <li>
                    <Link to="/logout">logout</Link>
                </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;