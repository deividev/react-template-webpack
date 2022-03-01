import React, { Component } from "react";
import landScape from '../../assets/images/landScape.jpeg';
import logo from "../../assets/svg/react.svg";

//components
import Button from "../pure/button.jsx"


class Ui extends Component {
  constructor() {
    super();
		this.configButtonPrimary = {
			direction: 'row-reverse',
			data: 'Toggle',
			icon: logo,
			classIcon: 'icon-reverse'
		};
		this.configButtonSecondary = {
			direction: 'row',
			data: 'Success',
			icon: logo,
			classIcon: 'icon'
		}
		this.configButtonTerciary = {
			direction: 'row',
			data: 'Errorrrrrrrrrrrrrrrrrrrrr',
			icon: logo,
			classIcon: 'icon'
		}
		this.primaryClass = 'btn-primary';
  }

		

  setConfig() {
    const button = document.querySelector("button");
    for (const key in this.config) {
      button.style.key = this.config.key;
    }
  }

  componentDidMount() {
    //this.setConfig();
  }

  render() {
    return (
      <div>
        <div>
			<p>Buttons</p>
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
