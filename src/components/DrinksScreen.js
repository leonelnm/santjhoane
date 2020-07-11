import React, { useState } from 'react'
import { Loading } from './loading/Loading'
import LazyLoad from 'react-lazyload'
import RationCard from './productCard/Ration'
import { orderObjectByname } from '../firebase/helperFirebase'

export const DrinksScreen = ({ drinks, loading }) => {

    const [state] = useState(
        orderObjectByname(drinks.filter(item => item.categories.includes('bebida')))
    )

    return (
        <>
            {loading || drinks.length === 0 ? <Loading drink={true} /> :
                <div id="ration" className="cards">
                    <LazyLoad placeholder={<p>Loading...</p>}>
                        <h2>Bebidas</h2>
                        <div className="grid-products">
                            {state.map((product, i) => (
                                <LazyLoad key={'lazy-drink' + i} placeholder={<p>Loading...</p>}>
                                    <RationCard key={product.id}
                                        img={product.img && product.img}
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
