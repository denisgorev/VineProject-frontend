import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { Row, Col } from "react-bootstrap";

const SignInSignUp = () => {
	return (
		<div>
			<Row>
				<Col xs={12} md={6} lg={6}>
					<SignIn />
				</Col>
				<Col xs={12} md={6} lg={6}>
					<SignUp />
				</Col>
			</Row>
		</div>
	);
};

export default SignInSignUp;
