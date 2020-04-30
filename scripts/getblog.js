require('dotenv/config');
const yaml = require('js-yaml');
const axios = require('axios');
const urlSlug = require('url-slug');
const { writeFileSync } = require('fs');

const PRES_URL = 'https://content.brian.dev/articles?_sort=id:DESC';
console.log(PRES_URL);
const SEPARATOR = '---';
axios
	.get(PRES_URL, {
		headers: {
			Accept: 'application/json',
		},
	})
	.then(({ data }) =>
		data.forEach(function (post) {
			var slug = urlSlug(post.slug);
			console.log(slug);
			let frontmatter = {
				title: post.title,
				date: post.published_at,
				draft: !post.live,
				excerpt: post.excerpt,
				slug: slug,
				image: {
					url: post.image.url,
					credit: post.title,
					credit_url: "#"
				},
				publication: post.publication
			};

			let yamlStr = yaml.safeDump(frontmatter);
			writeFileSync(
				__dirname + '/content/posts/' + slug.toLowerCase() + '.md',
				SEPARATOR + '\n' + yamlStr + '\n' + SEPARATOR + '\n\n' + post.content + '\n'
			)
		}

		)
	);
