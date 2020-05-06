require('dotenv/config');
const axios = require('axios');
const https = require('https');
const fs = require('fs');
var asciidoctor = require('@asciidoctor/core')()
var asciidoctorRevealjs = require('@asciidoctor/reveal.js')
asciidoctorRevealjs.register()


const path = require("path")
const Asciidoctor = require('asciidoctor');


const BASE = process.env.GITHUB_WORKSPACE || '/home/bjk/projects/lifehub/mono'

const getAllFiles = function (dirPath, arrayOfFiles) {
	var files = fs.readdirSync(dirPath)

	arrayOfFiles = arrayOfFiles || []

	files.forEach(function (file) {
		if (fs.statSync(dirPath + "/" + file).isDirectory()) {
				//arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
				// don't do anything here
				console.log("Skipping subdirectories");
		} else {
			arrayOfFiles.push(path.join(dirPath, "/", file))
		}
	})

	return arrayOfFiles
}

console.log(__dirname);
var asciidoctor = Asciidoctor()
const files = getAllFiles(BASE + '/content/talks');
console.log(files);
var list = [];
files.forEach(function (file) {
	// Do whatever you want to do with the file
	console.log(file);
	var options = { safe: 'safe', backend: 'revealjs', mkdirs: true, to_dir: 'sites/brianketelsen.com/static/talks' }
	asciidoctor.convertFile(file, options) // (1)
	list.push(file.split(/[\\\/]/).pop());
});

list.forEach(function(entry) {
	const link_entry = entry.substr(0, entry.lastIndexOf('.')) + '.html';
	console.log(link_entry);

});


const shell = require('child_process').execSync ; 

const src= BASE+'/content/talks/includes';
const dist= BASE+'/sites/brianketelsen.com/static/talks/includes';

shell(`mkdir -p ${dist}`);
shell(`cp -r ${src}/* ${dist}`);
