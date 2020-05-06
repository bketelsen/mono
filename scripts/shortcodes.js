require('dotenv/config');
const axios = require('axios');
const https = require('https');
const fs = require('fs');

const path = require("path");
const Asciidoctor = require('asciidoctor');


const SHORT_URL = 'https://bjk.fyi/redirects';
const TARGET_BASE = 'https://brianketelsen.com/snack/';
const BASE = process.env.GITHUB_WORKSPACE || '/home/bjk/projects/lifehub/mono';


const getAllFiles = function (dirPath, arrayOfFiles) {
	var files = fs.readdirSync(dirPath);

	arrayOfFiles = arrayOfFiles || [];

	files.forEach(function (file) {
		if (fs.statSync(dirPath + "/" + file).isDirectory()) {
				// don't do anything here
				console.log("Skipping subdirectories");
		} else {
			arrayOfFiles.push(path.join(dirPath, "/", file));
		}
	});

	return arrayOfFiles;
};

console.log(__dirname);
var asciidoctor = Asciidoctor();
const files = getAllFiles(BASE + '/content/snacks');
console.log(files);
files.forEach(function (file) {
	// Do whatever you want to do with the file
	console.log(file);
	var doc = asciidoctor.loadFile(file);
	console.log(doc.getDocumentTitle());
	const slug = doc.getAttributes().slug;
	const model = {
		"event": "entry.update",
		"model": "redirect",
		"entry": {
			"to": TARGET_BASE + slug,
			"short": slug,
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

});


/*
{
  "event": "entry.update",
  "created_at": "2020-05-04T13:16:58.507Z",
  "model": "redirect",
  "entry": {
    "id": 3,
    "to": "https://brianketelsen.com",
    "short": "test",
    "created_at": "2020-04-22T20:28:06.819Z",
    "updated_at": "2020-04-22T20:28:06.819Z",
    "alias": "brketels",
    "code": "webhook",
    "source": "github"
  }
}
*/