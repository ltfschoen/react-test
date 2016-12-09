import React, {Component} from 'react';

export default class Aside extends Component{
	constructor(props) {
		super(props);
	}

	render(){
		let {children} = this.props;
		return (
			<div className='aside pure-u-1 pure-u-sm-1-4'>
				{children}
			</div>
		)
	}
}