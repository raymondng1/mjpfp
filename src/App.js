import React from 'react';
import ReactDOM from 'react-dom';

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container,
	Row,
	Col,
	Jumbotron,
	Button,
	Input,
	InputGroup
} from 'reactstrap';

import Calendar from './Calendar';
const App = () => {
	return (
		<Container fluid className='centered'>
			<Navbar dark color='dark'>
				<NavbarBrand href='/'> Calendar </NavbarBrand>
			</Navbar>
			<div>
				<Button variant='primary'> Previous </Button>
				<Button variant='primary'> Next</Button>
			</div>
			<div>
				<Calendar />
			</div>
		</Container>
	);
};

export default App;
