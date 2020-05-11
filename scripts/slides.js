require('dotenv/config');
const axios = require('axios');
const https = require('https');
const fs = require('fs');

var copydir = require('copy-dir');

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



const src= BASE+'/content/talks/includes';
const dist= BASE+'/sites/bksapper/static/talk/includes';

copydir.sync(src, dist, {
  utimes: true,  // keep add time and modify time
  mode: true,    // keep file mode
  cover: true    // cover file when exists, default is true
});

console.log(__dirname);
var asciidoctor = Asciidoctor()
const files = getAllFiles(BASE + '/content/talks');
console.log(files);
var list = [];
files.forEach(function (file) {
	// Do whatever you want to do with the file
	console.log(file);
	var options = { safe: 'safe', backend: 'revealjs', mkdirs: true, to_dir: 'sites/bksapper/static/talk' }
	asciidoctor.convertFile(file, options) // (1)
	list.push(file.split(/[\\\/]/).pop());
});

list.forEach(function(entry) {
	const link_entry = entry.substr(0, entry.lastIndexOf('.')) + '.html';
	console.log(link_entry);

});

