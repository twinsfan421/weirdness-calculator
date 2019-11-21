export const likeGif = (gif) => {
	return {
		type: 'LIKE_GIF',
        gif: gif.gif,
        term: gif.term
	}
}

export const unlikeGif = (gif) => {
	return {
		type: 'UNLIKE_GIF',
        gif
	}
}