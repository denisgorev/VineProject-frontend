import React from "react";
import "./navbar.styles.css";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";


import { ReactComponent as Logo } from "../../assets/wine.svg";

import { Navbar, Nav } from "react-bootstrap";

const NavbarElement = ({ currentUser }) => {
    // console.log(currentUser);
	
	return (
		<Navbar className='navbar' bg='light' expand='lg'>
			<Navbar.Brand className='navbarbrand' href='/'>
				<Logo style={{ height: "30", width: "30" }} />
				Коллекция
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
				<Nav className='ml-auto navelem'>
					<Nav.Link href='/'>Выпитое</Nav.Link>

                    {currentUser && <Nav.Link href='/insert'>Новое</Nav.Link>}
                    

					{currentUser ? (
						<Nav.Link onClick={() => auth.signOut()}>Выход</Nav.Link>
					) : (
						<Nav.Link href='/signin'>Вход</Nav.Link>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(NavbarElement);
