import React from "react";
import { Route, Switch } from "react-router-dom";
import DrinkPage from "./pages/drink-page/drink-page";
import "./App.css";
import SpecDrink from './pages/specific-drink/spec-drink.component.jsx'
import NavbarElement from "./components/navbar/navbar.component.jsx";

const InsertPage = () => <h1>Введите напиток</h1>;

function App() {
	return (
		<div className='App'>
			<NavbarElement />
			<Switch>
				<Route exact path='/'>
					<DrinkPage />
				</Route>
				<Route exact path='/insert'>
					<InsertPage />
				</Route>
                <Route exact path='/:did/drink'>
					<SpecDrink />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
