import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function MyNav() {
    return (
        <Navbar className="navigation bg-light" expand="lg" >
            <Container>
                <Navbar.Brand href="/" className="fw-bold navbar-brand">React JS</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="nav ms-auto my-2 my-lg-0 fw-500" navbarScroll>
                        <NavLink activeclassname="active" to="/">Home</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>

                    </Nav>
                    <Button variant="outline-primary">Log In</Button>
                    <Button variant="outline-success">Sign Up</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNav;
