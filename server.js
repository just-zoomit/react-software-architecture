import express from 'express';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server'; // Add this
import { StaticRouter } from 'react-router-dom/server';
import path from 'path';
import fs from 'fs';
import App from './src/App';

global.window = {};

const app = express();

app.use(express.static('./build', { index: false }))

const articles = [
	{  title: 'Article 1', author: 'Bod' },
	{  title: 'Article 2', author: 'Betty' },
	{  title: 'Article 3', author: 'Frank' },
];

app.get('/api/articles', (req, res) => {

	//Load articles from (would be call to ) database
	const loadArticles = articles

	//Send the articles as JSON to the client
	res.json(loadArticles);

});

app.get('/*', (req, res) => {
	const sheet = new ServerStyleSheet();

	const reactApp = renderToString(
		sheet.collectStyles(
			<StaticRouter location={req.url}>
				<App />
			</StaticRouter>
		)
	);

	const templateFile = path.resolve('./build/index.html');
	fs.readFile(templateFile, 'utf8', (err, data) => {
		if (err) {
			return res.status(500).send(err);
		}

		return res.send(
			data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
				.replace('{{ styles }}', sheet.getStyleTags())
		)
	});
});

app.listen(8080, () => {
	console.log('Server is listening on port 8080');
});