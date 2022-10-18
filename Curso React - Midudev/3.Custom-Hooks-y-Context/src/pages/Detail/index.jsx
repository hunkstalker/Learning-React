import React from 'react'
import useGlobalGifs from '../../hooks/useGlobalGifs'
import Gif from '../../components/Gif'

function Detail({ params }) {
	const gifs = useGlobalGifs()
	console.log({ gifs })

	const gif = gifs.find(singleGif => singleGif.id === params.id)
	return <Gif {...gif} />
}

export default Detail
