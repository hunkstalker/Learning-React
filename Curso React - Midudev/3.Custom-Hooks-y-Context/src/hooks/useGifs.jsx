import { useContext, useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

function useGifs({ keyword } = { keyword: null }) {
	const [loading, setLoading] = useState(false)
	const { gifs, setGifs } = useContext(GifsContext)

	useEffect(() => {
		setLoading(true)
		// Recuperamos la keyword del localStorage
		const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'mapache'

		getGifs({ keyword: keywordToUse }).then(gifs => {
			setGifs(gifs)
			setLoading(false)
			// Guardamos la keyword del localStorage
			localStorage.setItem('lastKeyword', keyword)
		})
	}, [keyword, setGifs])
	return { loading, gifs }
}

export default useGifs
