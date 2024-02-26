import React from 'react';
import './ProductCard.css'

export default function RationCard(props){

    return (
        <div className="ration-card">
            <div className="ration-details">
                <div className="row product-name-price">
                <p>{props.name}</p>
                <p className="product-price">{props.price.replace('.', ',')} €</p>
                </div>
                {props.ingredients && <p className="product-ingredients">{props.ingredients}</p>}
            </div>
        </div>
    );

}