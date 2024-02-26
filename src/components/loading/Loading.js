import React from 'react'
import "./Loading.css"
import drinking from "./drinking.gif"
import cooking from "./cooking.gif";

export const Loading = ({drink}) => {

	const gif = drink ? drinking : cooking;

	return (
		<div className="loading">
			<img className="loading-img" src={gif} alt="cooking..."/>
			<p className="loading-text">Cargando...</p>
		</div>
	)
}
