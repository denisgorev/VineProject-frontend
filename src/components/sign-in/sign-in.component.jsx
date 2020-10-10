import React from "react";
import "./sign-in.styles.css";
import { Form, Button } from "react-bootstrap";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

class SignIn extends React.Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
		};
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (event) => {
		
        const { email, password } = this.state;
        event.preventDefault();
		try {
            auth.signInWithEmailAndPassword(email, password);
            console.log(this.state)
            this.setState({ email: "", password: "" });
            
		} catch (err) {
			console.log(err);
		}
	};
	render() {
		return (
			<Form className='sign-in' onSubmit={this.handleSubmit}>
            <h2>Войти в аккаунт</h2>
				
					<Form.Label>Email address</Form.Label>
					<FormInput
						type='email'
						name='email'
						label='email'
						value={this.state.email}
						handleChange={this.handleChange}
						required
					/>
                    
				
				
					<Form.Label>Password</Form.Label>
					<FormInput
						type='password'
						name='password'
						label='password'
						value={this.state.password}
						handleChange={this.handleChange}
						required
					/>
				
				<Button className='button' variant='secondary' type='submit'>
					Submit
				</Button>{" "}
				<Button className='button' onClick={signInWithGoogle} variant='outline-secondary'>
					Вход через Google
				</Button>
			</Form>
		);
	}
}

export default SignIn;
