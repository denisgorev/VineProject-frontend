import React from "react";
import "./navbar.styles.css";

import { ReactComponent as Logo } from "../../assets/wine.svg";

import { Navbar, Nav } from "react-bootstrap";

const NavbarElement = () => {
	return (
		<Navbar className='navbar' bg='light' expand='lg'>
			<Navbar.Brand className='navbarbrand' href='/'>
				<Logo style={{ height: "30", width: "30" }} />
				Коллекция
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
				<Nav className='ml-auto navelem'>
					<Nav.Link href='/insert'>Напиток</Nav.Link>
					<Nav.Link href='/'>Выпитое</Nav.Link>
					{/* <Nav.Link href='#link'>Вход</Nav.Link>
                    <Nav.Link href='#link'>Выход</Nav.Link> */}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarElement;
