import { useEffect, useState } from 'react'
import getGifs from '../services/getGifs'

function useGifs({ keyword } = { keyword: null }) {
	const [loading, setLoading] = useState(false)
	const [gifs, setGifs] = useState([])

	useEffect(() => {
		setLoading(true)
		// Recuperamos la keyword del localStorage
		console.log(keyword)
		const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'mapache'

		getGifs({ keyword: keywordToUse }).then(gifs => {
			setGifs(gifs)
			setLoading(false)
			// Guardamos la keyword del localStorage
			localStorage.setItem('lastKeyword', keyword)
		})
	}, [keyword])
	return { loading, gifs }
}

export default useGifs
