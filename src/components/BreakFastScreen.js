import React, { useState } from 'react'
import LazyLoad from 'react-lazyload'
import { orderObjectByname } from '../firebase/helperFirebase'
import { Loading } from './loading/Loading'
import BreakfastCard from './productCard/BreakfastCard'

export const BreakFastScreen = ({ products, loading }) => {

    const [state] = useState(
        orderObjectByname(products)
    )

    return (
        <>
            {loading ? <Loading /> :
                <div id="breakfast" className="cards">
                    <LazyLoad placeholder={<p>Loading...</p>}>
                        <h2>Desayunos</h2>
                        <div className="grid-breakfast">
                            {state.map((product, i) => (
                                <LazyLoad key={'lazy-weekend' + i} placeholder={<p>Loading...</p>}>
                                    <BreakfastCard key={product.id}
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
