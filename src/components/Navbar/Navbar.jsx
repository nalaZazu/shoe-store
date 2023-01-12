import React from 'react'
import { Button, Container, Nav,Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Head() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Link to={'/'}>
                        <Navbar.Brand>Shoe</Navbar.Brand>
                    </Link>
                    <Nav className="ms-auto">
                        <Link to={'/launch'}><Nav.Link >Launch</Nav.Link></Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Head

