import React, {Component} from 'react';

export default class Header extends Component{
	constructor(props) {
		super(props);
		//this.onClickTest.bind(this);
		this.state={
			counter: 0
		}
	}

	onClickTest(){
		this.setState({
			counter: ++this.state.counter
		})
	}
	render(){
		return (
			<header className='pure-u-1-1'>
				<h1>Header</h1>
				<button
					onClick={this.onClickTest.bind(this)} 
					className='clickTest'>
					{this.state.counter}
				</button>
				<hr/>
			</header>
		)
	}
}