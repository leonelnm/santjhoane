import { db } from './firebaseConfig';
import {convertSnapShotFirebaseToView } from './helperFirebase';


export const getDataProductsFirebase = async() => {

	let products = []

	await db.ref('products').once('value', (snapshot) => {
		products = convertSnapShotFirebaseToView(snapshot)
	}, (err) => {
		console.log("The read failed: " + err.code);
	});
	
	return products;
}

export const getDataDrinkssFirebase = async() => {

	let products = []

	await db.ref('drinks').once('value', (snapshot) => {
		products = convertSnapShotFirebaseToView(snapshot)
	}, (err) => {
		console.log("The read failed: " + err.code);
	});
	
	return products;
}

export const getDataBreakfastFirebase = async() => {

	let products = []

	await db.ref('breakfast').once('value', (snapshot) => {
		products = convertSnapShotFirebaseToView(snapshot)
	}, (err) => {
		console.log("The read failed: " + err.code);
	});
	
	return products;
}