import React from 'react';
import LazyLoad from 'react-lazyload';
import './ProductCard.css'

export default function ProductCard(props){
    

    return (
        <div className="row product-card">
            {props.img && <LazyLoad
                once={true}
                placeholder={<img src={props.img.url_100} alt={'img-'+props.name} />}
            >
            <img src={props.img.url_200} alt={'img-'+props.name.toLowerCase()} />
            </LazyLoad>}
            <div className="product-details">
                <div className="row product-name-price">
                <p>{props.name}</p>
                <p className="product-price">{props.price.replace('.', ',')} €</p>
                </div>
                {props.ingredients && <p className="product-ingredients">{props.ingredients}</p>}
            </div>
        </div>
    );
};