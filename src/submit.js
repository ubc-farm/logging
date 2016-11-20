import { SubmissionError } from 'redux-form';

export default function submit(initData) {
	let data = initData;
  console.log(data);
	let postPath = '/api/harvest' /*+ logType*/;
  console.log(JSON.stringify(data));

	return fetch( postPath, {
		method: 'POST',
		body: JSON.stringify(data),
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
