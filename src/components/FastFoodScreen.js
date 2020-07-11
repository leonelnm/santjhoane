import React, { useState } from 'react'
import LazyLoad from 'react-lazyload'
import ProductCard from './productCard/ProductCard'
import { orderObjectByname } from '../firebase/helperFirebase'
import { Loading } from './loading/Loading'

export const FastFoodScreen = ({ products, loading }) => {

	const [state] = useState(
		orderObjectByname(products.filter(item => item.img)
			.filter(item => item.categories.includes('entrantes'))))

	return (
		<>
			{loading ? <Loading/> :
				<div id="weekend" className="cards">
					<LazyLoad placeholder={<p>Loading...</p>}>
						<h2>Comida Rápida</h2>
						<div className="grid-products">
							{state.map((product, i) => (
								<LazyLoad key={'lazy-weekend' + i} placeholder={<p>Loading...</p>}>
									<ProductCard key={product.id}
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
			}
		</>
	)
}
