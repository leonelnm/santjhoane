import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import Header from './components/header/Header'
import LazyLoad from 'react-lazyload';
import ProductCard from './components/productCard/ProductCard';
import { convertJsonToState } from './firebaseUtils';
import RationCard from './components/productCard/Ration';
import Footer from './components/footer/Footer';

export default function App() {
    const [products, setProducts] = useState([]);
    const [productsWeekend, setProductsWeekend] = useState([]);
    const [porciones, setPorciones] = useState([]);

    useEffect(() => {
        fetch("https://santjhoane.firebaseio.com/products.json")
            .then(response => response.json())
            .then(data => {
                data = convertJsonToState(data);
                setProducts(data.onWeek);
                setProductsWeekend(data.onWeekend);
                setPorciones(data.porciones);
            })
    }, [])

    return (
        <Fragment>
            <Header />
            <div id="home">
                <LazyLoad placeholder={<p>Cargando card...</p>}>
                    <h2>Lunes a Viernes</h2>
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
                </LazyLoad>
            </div>
            <div id="weekend">
                <LazyLoad placeholder={<p>Loading...</p>}>
                    <h2>Fin de Semana y Festivos</h2>
                    {productsWeekend.map((product, i) => (
                        <LazyLoad key={'lazy-weekend' + i} placeholder={<p>Loading...</p>}>
                            <ProductCard key={'weekend' + i}
                                img={product.img && product.img}
                                name={product.name}
                                ingredients={
                                    product.ingredients['es'] && product.ingredients['es'].join(', ')
                                }
                                price={product.price}
                            />
                        </LazyLoad>

                    ))}
                </LazyLoad>
            </div>
            <div id="ration">
                <LazyLoad placeholder={<p>Loading...</p>}>
                    <h2>Raciones</h2>
                    {porciones.map((product, i) => (
                        <LazyLoad key={'lazy-ration' + i} placeholder={<p>Loading...</p>}>
                            <RationCard key={'ration' + i}
                                name={product.name}
                                price={product.price}
                            />
                        </LazyLoad>
                    ))}
                </LazyLoad>
            </div>

            <Footer></Footer>
        </Fragment>
    );
}
