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

import moment from 'moment'; 

class CalendarTitle extends React.Component {
    constructor(){
        super()
        this.state = {
            title:moment()
        }
    }
    month = () => {
        return this.state.title.format("MMMM")
    }
    year = () => {
        return this.state.title.format("Y")
    }
    render () {
        console.log('theState', this.state)
        return (
            <Navbar dark color='dark'>
                <NavbarBrand href='/'> Calendar {this.month()} {this.year()} </NavbarBrand> 
            </Navbar>	
        )// will need to change the Month of state with each click
    }
};

export default CalendarTitle; 