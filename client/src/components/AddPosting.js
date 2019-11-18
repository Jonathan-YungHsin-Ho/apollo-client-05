import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { GET_POSTINGS } from '../graphql/queries';
import { ADD_POSTING } from '../graphql/mutations';

const initState = {
	coach: '',
	title: '',
	industry: '',
	location: '',
	price: '',
	description: '',
};

export default function AddPosting() {
	const [posting, setPosting] = useState(initState);

	const [addPosting] = useMutation(ADD_POSTING, {});

	const handleChange = e => {
		setPosting({
			...posting,
			[e.target.name]:
				e.target.type === 'number' ? parseInt(e.target.value) : e.target.value,
		});
	};

	const handleSubmit = () => {
		// console.log(posting);
		addPosting({
			variables: {
				coach: posting.coach,
				title: posting.title,
				industry: posting.industry,
				location: posting.location,
				price: posting.price,
				description: posting.description,
			},
		});
		setPosting(initState);
	};

	return (
		<div>
			<h2>Add Posting</h2>
			<div className='add-wrapper'>
				<input
					type='text'
					name='coach'
					placeholder='...Coach'
					value={posting.coach}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='title'
					placeholder='...Title'
					value={posting.title}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='industry'
					placeholder='...Industry'
					value={posting.industry}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='location'
					placeholder='...Location'
					value={posting.location}
					onChange={handleChange}
				/>
				<input
					type='number'
					name='price'
					placeholder='...Price'
					value={posting.price}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='description'
					placeholder='...Description'
					value={posting.description}
					onChange={handleChange}
				/>
				<br />
				<button onClick={handleSubmit}>Add</button>
			</div>
		</div>
	);
}
