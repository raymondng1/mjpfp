import React from 'react';
import ReactDOM from 'react-dom';

import {
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

import CalendarTitle from './components/CalendarTitle'
import Calendar from './components/Calendar';
import ClickButtons from './components/ClickButtons'; 
import AddTask from './components/AddTask';

const App = () => {
	return (
		<Container fluid className='centered'>
			<CalendarTitle/>
			<ClickButtons/>
			<div>
				<Calendar />
			</div>
			<AddTask/>
		</Container>
	);
};

export default App;
