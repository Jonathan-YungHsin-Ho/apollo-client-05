import React from 'react';
import './App.css';

import AddPosting from './components/AddPosting';
import PostingsList from './components/PostingsList';

function App() {
	return (
		<div className='App'>
			<h1>React App - Apollo Client</h1>
			<AddPosting />
			<PostingsList />
		</div>
	);
}

export default App;
