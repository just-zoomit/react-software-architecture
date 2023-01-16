import 'isomorphic-fetch'; // call fetch from server side code
import express from 'express';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server'; // Add this
import { StaticRouter } from 'react-router-dom/server';
import path from 'path';
import fs from 'fs';
import App from './src/App';

import { InitialDataContext } from './src/InitialDataContext';

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

app.get('/*', async (req, res) => {
	const sheet = new ServerStyleSheet();

	const contextObj = { _isServerSide: true, _requests: [], _data: {} }

  // Redender the app to get the styles and data loading needs
	
	renderToString(
		sheet.collectStyles(
			<InitialDataContext.Provider value={contextObj}>
				<StaticRouter location={req.url}>
					<App />
				</StaticRouter>
			</InitialDataContext.Provider>
		)
	);

	
	//use this prop to tell whether the app is being rendered on the server or the client
	await Promise.all(contextObj._requests);
	contextObj._isServerSide = false;
	delete contextObj._requests;
 
	// Redender the app again without styles
	const reactApp = renderToString(
		<InitialDataContext.Provider value={contextObj}>
			<StaticRouter location={req.url}>
				<App />
			</StaticRouter>
		</InitialDataContext.Provider>
	);

	const templateFile = path.resolve('./build/index.html');
	fs.readFile(templateFile, 'utf8', (err, data) => {
		if (err) {
			return res.status(500).send(err);
		}

		return res.send(
			data.replace('<div id="root"></div>', `<script>window.preloadedData = ${JSON.stringify(contextObj)};</script><div id="root">${reactApp}</div>`)
				.replace('{{ styles }}', sheet.getStyleTags())
		)
	});
});

app.listen(8080, () => {
	console.log('Server is listening on port 8080');
});