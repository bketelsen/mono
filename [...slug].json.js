import { store } from '../../talkstore';
import { reply } from '../../services/http';

import Asciidoctor from 'asciidoctor';
const { readFile } = require('fs');


// ../../../content/talks/**/*.adoc


export function get(req, res, next) {
	var asciidoctor = Asciidoctor();

	const slug = req.params.slug;

	const talk = slug[0];

	const path = '../../content/talks/' + slug + '.adoc';
	readFile(path, 'utf8', function (err, data) {
		var html = asciidoctor.convert(data);
		if (err) throw err;
		reply(res, JSON.stringify({ html }));
	});
}
