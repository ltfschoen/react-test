import React, {Component} from 'react';

export default class Header extends Component{
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<header className='pure-u-1-1'>
				<h1>Header</h1>
				<hr/>
			</header>
		)
	}
}