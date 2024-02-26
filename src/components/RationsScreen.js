import React, { useState } from 'react'
import { orderObjectByname } from '../firebase/helperFirebase'
import LazyLoad from 'react-lazyload'
import RationCard from './productCard/Ration'
import { Loading } from './loading/Loading'

export const RationsScreen = ({ products, loading }) => {
    const [state] = useState(
        orderObjectByname(products.filter(item => item.categories.includes('racion')))
    )

    return (
        <>
            {loading ? <Loading/> :
                <div id="ration" className="cards">
				<LazyLoad placeholder={<p>Loading...</p>}>
					<h2>Porciones</h2>
					<div className="grid-products">
						{state.map((product, i) => (
							<LazyLoad key={'lazy-ration' + i} placeholder={<p>Loading...</p>}>
								<RationCard key={product.id}
									name={product.name}
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
