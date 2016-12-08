import React, {PropType} from 'react';
import ReactDOM from 'react-dom';

// function App(props){
// 	return (<div>Rending ...</div>)
// }

class App extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>{this.props.name} Render...</div>
		)
	}
}


ReactDOM.render(<App name={'lulu'}/>, document.getElementById('root'));
