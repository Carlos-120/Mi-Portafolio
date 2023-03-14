import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <header>

            <ul>
                <li>
                    <NavLink to="/">
                        {" "}
                        <h3>Home</h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/aboutme">
                        {" "}
                        <h3>About me</h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/myskills">
                        {" "}
                        <h3>My Skills</h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/experience">
                        {" "}
                        <h3>Experience</h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects">
                        {" "}
                        <h3>Projects</h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="contact/">
                        {" "}
                        <h3>Contact</h3>
                    </NavLink>
                </li>
            </ul>

        </header>
    )
}

export default Header