import React, {Component} from 'react';

export default class Layout extends Component{
	constructor(props) {
		super(props);
	}

	render(){
		console.dir(this.props);
		let {children} = this.props;
		return (
			<div className='pure-g'>
				{children}
			</div>
		)
	}
}