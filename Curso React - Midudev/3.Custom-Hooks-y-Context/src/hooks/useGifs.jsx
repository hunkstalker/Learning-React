import { useEffect, useState } from 'react'
import getGifs from '../services/getGifs'

function useGifs({ keyword } = { keyword: null }) {
	const [loading, setLoading] = useState(false)
	const [gifs, setGifs] = useState([])

	// Recuperamos la keyword del localStorage
	const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

	useEffect(() => {
		setLoading(true)
		console.log(keyword)

		getGifs({ keyword: keywordToUse }).then(gifs => {
			setGifs(gifs)
			setLoading(false)
			// Guardamos la keyword del localStorage
			localStorage.setItem('lastKeyword', keyword)
		})
	}, [keyword, keywordToUse])
	return { loading, gifs }
}

export default useGifs
