import React, { Component } from 'react';


export default class Button extends Component{
	constructor(props) {
		super(props);
		this.state={
			counter: 0
		}
	}
	componentDidMount() {
		this.setState({
			counter : this.props.hasBeenClicked
		})
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			counter : nextProps.hasBeenClicked
		})		
	}
	onButtonClick(){
		this.setState({
			counter : ++this.state.counter
		})
	}
	render(){
		return (
			<button onClick={this.onButtonClick.bind(this)} className='button'>
				{
					`Clicked ${this.state.counter} times`
				}
			</button>
		)
	}
}