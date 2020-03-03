import React from "react";
import './Header.scss';
import { Navbar } from "react-bootstrap";

function Header () {
    return (
        <div className="Header">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Perlego</Navbar.Brand>
            </Navbar>
        </div>
    );
}

export default Header;