import React, {Component} from 'react';

export default class Footer extends Component{
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<footer className='pure-u-1-1'>
				<p>Powered by LuLu</p>
			</footer>
		)
	}
}