import React from "react";

import { CardList } from "../../components/card-list/card-list.component";

class DrinkPage extends React.Component {
	constructor() {
		super();
		this.state = {
			DCs: [],
		};
	}

	async componentDidMount() {
		const response = await fetch("http://192.168.0.16:5000/api/drinks/users/u1");
		const json = await response.json();
		// await console.log(json.drinkCons[0])
		await this.setState({ DCs: json.drinkCons });
	}

	render() {
		const DC = this.state.DCs;
		console.log(DC);
		// DC.forEach(element => {
		//     console.log(element)
		// });

		return (
			<div className='App'>
				<CardList DCs={DC} />
			</div>
		);
	}
}

export default DrinkPage;
