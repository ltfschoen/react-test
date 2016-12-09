import './style.scss';
import React, {PropType} from 'react';
import config from './config';
import ReactDOM from 'react-dom';
import Layout from './components/layout';
import Header from './components/header';
import Footer from './components/footer';
import Aside from './components/aside';
import Content from './components/content';

class App extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<Layout>
				<Header />
				<div className='main'>
					<div className='pure-g'>
						<Aside>
							<p>aside</p>
						</Aside>
						<Content>
							<p>content</p>
						</Content>
					</div>
				</div>
				<Footer poweredBy={config.poweredBy}/>
			</Layout>			
		)
	}
}


ReactDOM.render(
	<App />,
	document.getElementById('root')
);
