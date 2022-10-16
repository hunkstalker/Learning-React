import ListOfGifs from './components/ListOfGifs'
import React from 'react'
import './App.css'

import { Link, Route } from 'wouter'

function App() {
	return (
		<div className='App'>
			<section className='App-content'>
				<h1>App</h1>
				<Link to='/gif/mapache'>Gifs de mapaches</Link>
				<Link to='/gif/bender'>Gifs de Bender</Link>
				<Link to='/gif/morty'>Gifs de Morty</Link>
				<Route path='/gif/:keyword' component={ListOfGifs} />
			</section>
		</div>
	)
}

export default App
