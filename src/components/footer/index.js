import React, {Component} from 'react';

export default class Footer extends Component{
	constructor(props) {
		super(props);
	}

	render(){
		let {poweredBy} = this.props;
		return (
			<footer className='pure-u-1-1'>
				<p>Powered by {poweredBy}</p>
			</footer>
		)
	}
}