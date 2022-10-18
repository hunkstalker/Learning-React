const apiKey = 'hhEC9F6tOi4cRbV5sJ3tjV6XaJUjTSwu'

async function getGifs({ keyword = 'morty' } = {}) {
	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=100&offset=0&rating=g&lang=en`
	return await fetch(apiURL)
		.then(res => res.json())
		.then(response => {
			const { data } = response
			if (Array.isArray(data)) {
				const gifs = data.map(image => {
					const { images, title, id } = image
					const { url } = images.fixed_width
					return { title, id, url }
				})
				return gifs
			}
		})
}

export default getGifs
