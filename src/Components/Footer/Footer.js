import React from "react";
import './Footer.scss';
import { Navbar } from "react-bootstrap";

function Footer () {
    return (
        <div className="Footer">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand><span>&copy; 2020 TK</span></Navbar.Brand>
            </Navbar>
        </div>
    );
}
export default Footer;