import React from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { Route, Switch, Redirect } from "react-router-dom";
import DrinkPage from "./pages/drink-page/drink-page";
import "./App.css";
import SpecDrink from "./pages/specific-drink/spec-drink.component.jsx";
import NavbarElement from "./components/navbar/navbar.component.jsx";
import InsertDrink from "./pages/insert-drink/insert-drink.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
        const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					setCurrentUser ({ id: snapShot.id, ...snapShot.data() })
						},
						// console.log(this.state)
					);
				
			} else {
				setCurrentUser( userAuth );
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
    }
    
	render() {
		return (
			<div className='App'>
				<NavbarElement />
				<Switch>
					<Route exact path='/'>
						<DrinkPage />
					</Route>
					<Route exact path='/insert'>
						<InsertDrink />
					</Route>
					<Route exact path='/:did/drink' render={({ match }) => <SpecDrink match={match} />} />
					<Route
						exact
						path='/signin'
						render={() => (this.props.currentUser ? <Redirect to='/' /> : <SignInSignUp />)}
					/>
                    
                   
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
