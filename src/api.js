function api(url) {
	return fetch(url).then(res => res.json())
}

export default api