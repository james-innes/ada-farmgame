import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand href="#home">
				<img
					alt=""
					src="/img/farmer.png"
					width="30"
					height="30"
					className="d-inline-block align-top"
				/>
				{' Farm Game'}
			</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link href="#link">Sign In</Nav.Link>
				<Nav.Link href="#link">Sign Out</Nav.Link>
				<Nav.Link href="#link">New Game</Nav.Link>
			</Nav>
			<Navbar.Toggle />
			<Navbar.Collapse className="justify-content-end">
				<Navbar.Text>
					Signed in as:{' '}
					<a href="#login">Mark Otto</a>
				</Navbar.Text>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navbar;
