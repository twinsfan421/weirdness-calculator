export const likeGif = (gif) => {
	return {
		type: 'LIKE_GIF',
        gif
	}
}

export const unlikeGif = (gif) => {
	return {
		type: 'UNLIKE_GIF',
        gif
	}
}