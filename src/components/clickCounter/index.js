import Button from '../button';
import React,{Component} from 'react';

class ClickCounter extends Component{
	constructor(props) {
		super(props);
	}

	onClickHandler(c){
		this.disCounter.innerText=(c<=0)? `Has not been clicked` : `Has been clicked ${c} times`;
	}

	render(){
		return (
			<div>
				<span ref={(disCounter)=>{this.disCounter=disCounter;}}></span><br/>
				<Button hasBeenClicked={0} onClickHandler= {this.onClickHandler.bind(this)}/>
			</div>
		)
	}
} 

export default ClickCounter;