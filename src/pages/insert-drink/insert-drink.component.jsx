import React from "react";
import FromInput from "../../components/form-input/form-input.component";
import { Redirect } from "react-router-dom";
import { Form } from "react-bootstrap";
import "./insert-drink.scss";

class InsertDrink extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "",
			alcoKind: "",
			alcoType: "",
			country: "",
			placeOfConsumption: "",
			rate: "",
			appetizer: "",
			comment: "",
			
			redirect: false,
		};
	}

	handleChange = (event) => {
		console.log(event.target.name);
		const { name, value } = event.target;
		this.setState({ [name]: value });
		console.log(this.state);
	};

	handleChangeOption = (event) => {
		console.log(event.target.name);
		const value = event.target.value;
		event.target.name === "alcoKind"
			? this.setState({ alcoKind: value })
			: this.setState({ alcoType: value });
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch("http://192.168.0.16:5000/api/drinks/", {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify({
					name: this.state.name,
					alcoKind: this.state.alcoKind,
					alcoType: this.state.alcoType,
					country: this.state.country,
					placeOfConsumption: this.state.placeOfConsumption,
					rate: this.state.rate,
					appetizer: this.state.appetizer,
					comment: this.state.comment,
					
				}),
			});
			const responseData = await response.json();
			await this.setState({ redirect: true });
			if (!response.ok) {
				console.log(responseData.message);
			}
			console.log(responseData);
		} catch (err) {
			console.log(err);
		}

		// this.setState({
		// 	name: "",
		// 	alcoKind: "",
		// 	alcoType: "",
		// 	country: "",
		// 	placeOfConsumption: "",
		// 	rate: '',
		// 	appetizer: "",
		// 	comment: "",
		// 	date: "",
		// });
	};
	render() {
		const { redirect } = this.state;
		console.log(redirect);

		if (redirect) {
			return <Redirect to='/' />;
		}
		return (
			<div className='insert-drink'>
				Введите воспоминание
				<form onSubmit={this.handleSubmit}>
					<FromInput
						name='name'
						type='text'
						value={this.state.name}
						handleChange={this.handleChange}
						label='Название пития'
						required
					/>
					{/* <select name='alcoKind' value={this.state.alcoKind} onChange={this.handleChangeOption}>
						<option value=''>Выберите тип напитка</option>
						<option value='Вино'>Вино</option>
						<option value='Пиво'>Пиво</option>
					</select> */}

					<Form.Control
						name='alcoKind'
						value={this.state.alcoKind}
						onChange={this.handleChangeOption}
						as='select'
					>
						<option value=''>Выберите тип напитка</option>
						<option value='Вино'>Вино</option>
						<option value='Пиво'>Пиво</option>
					</Form.Control>

					<br></br>

					{
						this.state.alcoKind === "Вино" ? (
							<Form.Control
								name='alcoType'
								value={this.state.alcoType}
								onChange={this.handleChangeOption}
								as='select'
							>
								<option value=''>Выберите разновидность</option>
								<option value='Белое сухое'>Белое сухое</option>
								<option value='Красное сухое'>Красное сухое</option>
							</Form.Control>
						) : (
							<Form.Control
								name='alcoType'
								value={this.state.alcoType}
								onChange={this.handleChangeOption}
								as='select'
							>
								<option value=''>Выберите разновидность</option>
								<option value='Пшеничное'>Пшеничное</option>
								<option value='IPA'>IPA</option>
							</Form.Control>
						)
						/* {this.state.alcoKind === "Вино" ? (
						<select name='alcoType' value={this.state.alcoType} onChange={this.handleChangeOption}>
							<option value=''>Выберите разновидность</option>
							<option value='Белое сухое'>Белое сухое</option>
							<option value='Красное сухое'>Красное сухое</option>
						</select>
					) : (
						<select name='alcoType' value={this.state.alcoType} onChange={this.handleChangeOption}>
							<option value=''>Выберите разновидность</option>
							<option value='Пшеничное'>Пшеничное</option>
							<option value='IPA'>IPA</option>
						</select>
					)} */
					}

					<FromInput
						name='country'
						type='text'
						value={this.state.country}
						label='Сраны производитель'
						handleChange={this.handleChange}
						required
					/>
					<FromInput
						name='placeOfConsumption'
						type='text'
						value={this.state.placeOfConsumption}
						label='Где вы сейчас?'
						handleChange={this.handleChange}
						required
					/>
					<FromInput
						name='rate'
						type='text'
						value={this.state.rate}
						label='Оценка от 1 до 10'
						handleChange={this.handleChange}
						required
					/>
					<FromInput
						name='appetizer'
						type='text'
						value={this.state.appetizer}
						handleChange={this.handleChange}
						label='Чем закусывали?'
					/>
					<FromInput
						name='comment'
						type='text'
						value={this.state.comment}
						handleChange={this.handleChange}
						label='Будут ли комментарии?'
						required
					/>
					
					<input type='submit' />
				</form>
			</div>
		);
	}
}

export default InsertDrink;
