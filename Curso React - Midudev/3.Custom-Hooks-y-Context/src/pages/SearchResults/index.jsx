import React from 'react'
import ListOfGifs from '../../components/ListOfGifs/index'
import Spinner from '../../components/Spinner/index'
import useGifs from '../../hooks/useGifs'

function SearchResults({ params }) {
	const { keyword } = params
	const { loading, gifs } = useGifs({ keyword })

	return <>{loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}</>
}

export default SearchResults
