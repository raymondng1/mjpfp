import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import axios from 'axios';
import './App.css';
class Calendar extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [] // will need to manage the state better with redux
		};
	}
	componentDidMount() {
		axios
			.get('/api/calendar')
			.then(res => {
				// console.log(res.data)
				this.setState({ data: res.data.rows });
			})
			.catch(err => console.log(err));
	}
	render() {
		const { data } = this.state;

		console.log('render', data);
		return (
			<div>
                    
					{data.map(data => (
						<div className="block">
                                <div> {data.date} </div>
                                <div> {data.to_do} </div>
						</div>
					))}
	
			</div>
		);
	}
}





export default Calendar;
