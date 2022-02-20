
import React, { Component } from 'react';
import button from './button.scss';


class Button extends Component {
	constructor(props) {
		super(props)
		this.config = props.props;
	}
	
	
	setConfig() {
		const button = document.querySelector('button');
		button.style.color = this.config.color;
		button.style.border = this.config.border;
		button.style.borderRadius = this.config.borderRadius;
		button.style.backgroundColor = this.config.backgroundColor;
	}


	componentDidMount() {
		this.setConfig();
  }

	componentWillMount() {

	}

	render() {
		return (
			<button className='button'>
				{this.config.data}
				{this.config.icon && <img src={this.config.icon} width="25px" height="25px" alt="" />}
			</button>
		)
	}
}

Button.propTypes = {

}

export default Button

