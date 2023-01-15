import React, { useState, useEffect } from 'react';

export const Articles = () => {
	const [articles, setArticles] = useState();


	useEffect(() => {
		fetch('/api/articles')
			.then(response => {
				console.log("Here After: ",response.json());
				
				
				response.json()})
			.then(data => {
				console.log("Here After: ",data);
				setArticles(data)
			});
	}, []);


	return (
		<>
		<h1>Articles From Backend </h1>
		{articles && articles.map(article => (
			<div key={article.title}>
				<h3>{article.title}</h3>
				<p> By: {article.author}</p>
			</div>
		))}
		</>
	);
}