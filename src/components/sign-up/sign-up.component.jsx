import React from "react";
import "./sign-up.styles.css";
import { Form, Button } from "react-bootstrap";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

class SignUp extends React.Component {
	constructor() {
		super();
		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { displayName });
			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		} catch (error) {
			console.log(error);
		}
	};
	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<Form className='sign-up' onSubmit={this.handleSubmit}>
				<h2>Зарегистрироваться</h2>
				<Form.Label>Имя</Form.Label>
				<FormInput
					type='text'
					name='displayName'
					label='Имя'
					value={displayName}
					handleChange={this.handleChange}
					required
				/>
				<Form.Label>Email address</Form.Label>
				<FormInput
					type='email'
					name='email'
					label='email'
					value={email}
					handleChange={this.handleChange}
					required
				/>
				<Form.Label>Password</Form.Label>
				<FormInput
					type='password'
					name='password'
					label='password'
					value={password}
					handleChange={this.handleChange}
					required
				/>
				<Form.Label>Password</Form.Label>
				<FormInput
					type='password'
					name='confirmPassword'
					label='confirmPassword'
					value={confirmPassword}
					handleChange={this.handleChange}
					required
				/>
				<Button className='button' variant='secondary' type='submit'>
					Submit
				</Button>
			</Form>
		);
	}
}

export default SignUp;
