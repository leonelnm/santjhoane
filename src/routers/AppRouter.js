import React from 'react'
import {
	BrowserRouter as Router,
	Switch, Route, Redirect
} from "react-router-dom";
import { WeekendScreen } from '../components/WeekendScreen';
import { RationsScreen } from '../components/RationsScreen';
import { DrinksScreen } from '../components/DrinksScreen';
import { BreakFastScreen } from '../components/BreakFastScreen';
import { FastFoodScreen } from '../components/FastFoodScreen';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { DishesScreen } from '../components/DishesScreen';
import { useProductsFirebaseData } from '../hooks/useProductsFirebaseData';
import { useDrinksFirebaseData } from '../hooks/useDrinksFirebaseData';
import { useBreakfastFirebaseData } from '../hooks/useBreakfastFirebaseData';

export const AppRouter = () => {

	const redirectByHour = new Date().getHours() > 12 ? "breakfast" : "dishes";
	//let redirectByHour = "/";

	const { data: products, loading } = useProductsFirebaseData();
	const { data: drinks, loading: loadingDrink } = useDrinksFirebaseData();
	const { data: breakfast, loading: loadingBreakfast } = useBreakfastFirebaseData();

	return (
		<Router>
			<Header />
			<div>
				<Switch>

					<Route exact path="/" component={() => <DishesScreen products={products} loading={loading} />} />
					<Route exact path="/weekend" component={() => <WeekendScreen products={products} loading={loading} />} />
					<Route exact path="/rations" component={() => <RationsScreen products={products} loading={loading} />} />
					<Route exact path="/drinks" component={() => <DrinksScreen drinks={drinks} loading={loadingDrink} />} />
					<Route exact path="/breakfast" component={() => <BreakFastScreen products={breakfast} loading={loadingBreakfast} />} />
					<Route exact path="/entrees" component={() => <FastFoodScreen products={products} loading={loading} />} />

					<Redirect to={`${redirectByHour}`} />
				</Switch>
			</div>
			<Footer />
		</Router>
	)
}
