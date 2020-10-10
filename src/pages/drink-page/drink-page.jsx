import React from "react";
import store from "../../redux/store";
import { connect } from "react-redux";

import { CardList } from "../../components/card-list/card-list.component";

class DrinkPage extends React.PureComponent {
	constructor() {
		super();
		this.state = {
			DCs: [],
			isLoaded: false,
		};
	}

	componentDidMount() {
		this.setState({ isLoaded: true });
	}
	async componentDidUpdate() {
		// console.log(this.props.currentUser.id, "didmount");
		// const response = await fetch("http://localhost:5000/api/drinks/users/u1");
		if (this.props.currentUser) {
			const response = await fetch(
				`http://192.168.0.16:5000/api/drinks/users/${this.props.currentUser.id}`
			);
			const json = await response.json();

			if (this.state.DCs.length === 0) {
				await this.setState({ DCs: json.drinkCons });
			}
		}
	}

	render() {
		const DC = this.state.DCs;

		// console.log(DC);
		console.log(this.props.currentUser, "render");

		return (
			<div className='App'>
				<CardList DCs={DC} />
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(DrinkPage);
