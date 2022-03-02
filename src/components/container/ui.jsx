import React, { Component } from "react";
import logo from "../../assets/svg/react.svg";

//components
import Button from "../pure/button.jsx";
import TextUi from "./textUi.jsx"


class Ui extends Component {
  constructor() {
    super();
		this.configButtonPrimary = {
			direction: 'row-reverse',
			data: 'Toggle',
			icon: logo,
			marginIcon: 'icon-reverse'
		};
		this.configButtonSecondary = {
			direction: 'row',
			data: 'Success',
			icon: logo,
			marginIcon: 'icon'
		}
		this.configButtonTerciary = {
			direction: 'row',
			data: 'Errorrrrrrrrrrrrrrrrrrrrr',
			icon: logo,
			marginIcon: 'icon'
		}
		this.configButtonLiteral = {
			direction: 'direction: row-reverse (para situar icono al principio)',
			data: 'data: Texto a mostrar en el button',
			icon: 'icon: url donde esta situado el .svg',
			marginIcon: 'marginIcon: icon-reverse (marginRigth 5px;) icon (marginLeft 5px)'
		};
		this.primaryClass = 'btn-primary';
  }

  render() {
    return (
      <div>
        <div>
			<TextUi />
			<h3>Buttons</h3>
			<div>
				config 
					<p>{this.configButtonLiteral.direction}</p>
					<p>{this.configButtonLiteral.data}</p>
					<p>{this.configButtonLiteral.icon}</p>
					<p>{this.configButtonLiteral.marginIcon}</p>
				className = <span>"btn--secondary" por ej </span>
					
				<Button className={'btn-secondary'} config={this.configButtonSecondary}></Button>
			</div>
			<div  className="flex">
				<Button className={this.primaryClass} config={this.configButtonPrimary}></Button>
				<Button className={'btn-secondary'} config={this.configButtonSecondary}></Button>
				<Button className={'btn-terciary'} config={this.configButtonTerciary}></Button>
			</div>
        </div>
      </div>
    );
  }
}

export default Ui;
