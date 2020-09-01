import React from 'react';
import LazyLoad from 'react-lazyload';
import './ProductCard.css'

export default function BreakfastCard(props) {


	return (
		<div className="column breakfast-card">
			{props.img && <LazyLoad
				once={true}
				placeholder={<img src={props.img.url_100} alt={'img-' + props.name} />}
			>
				<img src={props.img.url_200} alt={'img-' + props.name.toLowerCase()} />
			</LazyLoad>}
			<div className="breakfast-details">
				<div className="column breakfast-name-price">
					<p>{props.name}</p>
					<p className="breakfast-price">{props.price.replace('.', ',')} €</p>
				</div>
				{props.ingredients && <p className="breakfast-ingredients">{props.ingredients}</p>}
			</div>
		</div>
	);
};