
import React, { Component } from 'react';
import button from './button.scss';


class Button extends Component {
	constructor(props) {	
		super(props)
		this.config = props?.config;
		this.className= this.config.direction !== 'row-reverse' ? props?.className : this.className= props?.className + '--reverse';
		this.config.marginIcon = this.config.marginIcon === 'icon' ? {marginLeft: 10} : {marginRight: 10};
		
	}
	
	
		// setConfig() {
		// 	const button = document.querySelector('button');
		// 	Object.entries(this.config.configCss).forEach(([key, value]) => {
		// 		button.style.key = value;
		// 	});
		// }


	componentDidMount() {
		//this.setConfig();
  	}

	componentWillMount() {

	}

	render() {
		return (
			<button className={this.className}>
				{this.config.data}
				{this.config.icon && <img src={this.config.icon}  width="25px" height="25px" style={this.config.marginIcon} alt="" />}
			</button>
		)
	}
}

export default Button;

