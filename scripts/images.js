require('dotenv/config');
const axios = require('axios');
const https = require('https');
const fs = require('fs');


const PRES_URL = 'https://content.ketelsen.dev/upload/files';
console.log(PRES_URL);
axios
	.get(PRES_URL, {
		headers: {
			Accept: 'application/json',
		},
	})
	.then(({ data }) =>
		data.forEach(function (image) {
			console.log(image);
			var url = image.url;
			// full size
			saveFile(url);
			// small
			saveFile(image.formats.small.url);
			// medium
			saveFile(image.formats.medium.url);
			// thumbnail
			saveFile(image.formats.thumbnail.url);

		}

		)
	);
    
	function saveFile(url) {

			const file = fs.createWriteStream('content/' + url);
			const request = https.get("https://content.ketelsen.dev" + url, function (response) {
				response.pipe(file);
			});
	}