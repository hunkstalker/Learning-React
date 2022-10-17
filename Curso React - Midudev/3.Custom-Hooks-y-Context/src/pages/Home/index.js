import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'

const POPULAR_GIFS = ['Matrix', 'mapache', 'Blender', 'Morty']

function Home() {
	const [keyword, setKeyword] = useState('')
	const [path, pushLocation] = useLocation()

	const handleSubmit = evt => {
		evt.preventDefault()
		pushLocation(`/search/${keyword}`)
	}

	const handleChange = evt => {
		setKeyword(evt.target.value)
	}

	return (
		<>
			<form onChange={handleChange} onSubmit={handleSubmit}>
				<input plaholder='Search a gif here...' type='text' value={keyword} />
			</form>
			<h3 className='App-title'>Los gifs más populares</h3>
			<ul>
				{POPULAR_GIFS.map(popularGif => (
					<li key={popularGif}>
						<Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
					</li>
				))}
			</ul>
		</>
	)
}

export default Home
