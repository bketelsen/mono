require('dotenv/config');
const axios = require('axios');
const https = require('https');
const fs = require('fs');


const PRES_URL = 'https://content.brian.dev/upload/files';
console.log(PRES_URL);
axios
	.get(PRES_URL, {
		headers: {
			Accept: 'application/json',
		},
	})
	.then(({ data }) =>
		data.forEach(function (image) {
			var url = image.url;
			console.log(url);

			const file = fs.createWriteStream('.' + url);
			const request = https.get("https://content.brian.dev" + url, function (response) {
				response.pipe(file);
			});
		}

		)
	);
