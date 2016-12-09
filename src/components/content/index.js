import React, {Component} from 'react';

export default class Content extends Component{
	constructor(props) {
		super(props);
	}

	render(){
		let {children} = this.props;
		return (
			<div className='content pure-u-1 pure-u-sm-3-4'>
				{children}
			</div>
		)
	}
}