export default function locations() {

	return fetch('/api/locations', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	}).then(response => {
		const jsonStream = response.json();

		if (response.ok) return jsonStream;
		else if (response.status === 400) {
			return jsonStream.then(json => { throw new SubmissionError(json); });
		}

		throw response;
	});
}
