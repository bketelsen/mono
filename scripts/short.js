const fs = require('fs'); 
const csv = require('csv-parser');
const axios = require('axios');
const https = require('https');

const path = require("path");


const SHORT_URL = 'https://bjk.fyi/redirects';
const BASE = process.env.GITHUB_WORKSPACE || '/home/bjk/projects/lifehub/mono';

const inputFilePath = BASE + '/content/bjk.fyi/short/kv.csv'

fs.createReadStream(inputFilePath)
	.pipe(csv())
	.on('data', function(data){
		try {
			console.log("FROM is: "+data.FROM);
			console.log("TO is: "+data.TO);

			//perform the operation
			const model = {
				"event": "entry.update",
				"model": "redirect",
				"entry": {
					"to": data.TO,
					"short": data.FROM,
				}
			};
			let config = {
				headers: { 'Content-Type': 'application/json' }
			};
			console.log("posting: ", model);

			axios
				.post(SHORT_URL, JSON.stringify(model), config)
				.then((response) => {
					console.log(response.data);
				});

		}
		catch(err) {
			console.log(err);
		}
	})
	.on('end',function(){
		//some final operation
	});  

