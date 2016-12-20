import React, { Component, PropTypes } from 'react';


export default class Button extends Component{
	constructor(props) {
		super(props);
		this.state={
			counter: 0
		}
	}

	static propTypes = {
		hasBeenClicked : PropTypes.number,
		showCounter: PropTypes.bool,
		onClickHandler: PropTypes.func
	}

	static defaultProps = {
		showCounter: false,
		hasBeenClicked: 0
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

	componentDidUpdate(prevProps, prevState) {
		let c = this.state.counter;
		this.props.onClickHandler(c);
	}

	onButtonClick(){
		this.setState({
			counter : ++this.state.counter
		})
	}
	render(){
		let { hasBeenClicked, showCounter, onClickHandler } = this.props;
		return (
			<button onClick={this.onButtonClick.bind(this)} className='button'>
				{
					showCounter? `Clicked ${this.state.counter} times` : `Click`
				}
			</button>
		)
	}
}