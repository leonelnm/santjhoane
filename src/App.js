import React, { useState, useEffect } from 'react';
import './App.css';
import LazyLoad from 'react-lazyload';
import ProductCard from './components/productCard/ProductCard';
import { convertJsonToState } from './firebaseUtils';

export default function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://santjhoane.firebaseio.com/products.json")
			.then(response => response.json())
			.then(data => {
				data = convertJsonToState(data);
				setProducts(data.onWeek);
			})
	}, [])

	return (
		<>
			<div id="home" className="cards">
				<LazyLoad placeholder={<p>Loading...</p>}>
					<h2>Lunes a Viernes</h2>
					<div className="grid-products">
						{products.map((product, i) => (
							<LazyLoad key={'lazy-product' + i} placeholder={<p>Loading...</p>}>
								<ProductCard key={'product' + i}
									img={product.img && product.img}
									name={product.name}
									ingredients={
										product.ingredients['es'] && product.ingredients['es'].join(', ')
									}
									price={product.price}
								/>
							</LazyLoad>

						))}
					</div>
				</LazyLoad>
			</div>
		</>
	);
}
