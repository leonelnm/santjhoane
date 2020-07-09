import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import App from '../App';
import { WeekendScreen } from '../components/WeekendScreen';
import { RationsScreen } from '../components/RationsScreen';
import { DrinksScreen } from '../components/DrinksScreen';
import { BreakFastScreen } from '../components/BreakFastScreen';
import Header from '../components/header/Header';
import { FastFoodScreen } from '../components/FastFoodScreen';
import Footer from '../components/footer/Footer';

export const AppRouter = () => {

	const redirectByHour = new Date().getHours() < 12 ? "breakfast" : "dishes";

	return (
		<Router>
			<Header />
			<div>
				<Switch>

					<Route exact path="/dishes" component={App} />
					<Route exact path="/weekend" component={WeekendScreen} />
					<Route exact path="/rations" component={RationsScreen} />
					<Route exact path="/drinks" component={DrinksScreen} />
					<Route exact path="/breakfast" component={BreakFastScreen} />
					<Route exact path="/entrees" component={FastFoodScreen} />

					<Redirect to={`/${redirectByHour}`} />
				</Switch>
			</div>
			<Footer />
		</Router>
	)
}
