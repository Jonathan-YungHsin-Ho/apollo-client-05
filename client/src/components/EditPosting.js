import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { UPDATE_POSTING } from '../graphql/mutations';

export default function EditPosting({ posting, handleEdit }) {
	const [updatedPosting, setUpdatedPosting] = useState(posting);

	const [updatePosting] = useMutation(UPDATE_POSTING);

	const handleChange = e => {
		setUpdatedPosting({
			...updatedPosting,
			[e.target.name]:
				e.target.type === 'number' ? parseInt(e.target.value) : e.target.value,
		});
	};

	const handleSubmit = () => {
		// console.log(updatedPosting);
		updatePosting({
			variables: {
				id: updatedPosting.id,
				coach: updatedPosting.coach,
				title: updatedPosting.title,
				industry: updatedPosting.industry,
				location: updatedPosting.location,
				price: updatedPosting.price,
				description: updatedPosting.description,
			},
		});
		handleEdit();
	};

	return (
		<div>
			<hr />
			<div className='input-wrapper'>
				<label htmlFor='coach'>Coach: </label>
				<input
					type='text'
					id='coach'
					name='coach'
					placeholder='...Coach'
					value={updatedPosting.coach}
					onChange={handleChange}
				/>
			</div>
			<div className='input-wrapper'>
				<label htmlFor='title'>Title: </label>
				<input
					type='text'
					id='title'
					name='title'
					placeholder='...Title'
					value={updatedPosting.title}
					onChange={handleChange}
				/>
			</div>
			<div className='input-wrapper'>
				<label htmlFor='industry'>Industry: </label>
				<input
					type='text'
					id='industry'
					name='industry'
					placeholder='...Industry'
					value={updatedPosting.industry}
					onChange={handleChange}
				/>
			</div>
			<div className='input-wrapper'>
				<label htmlFor='location'>Location: </label>
				<input
					type='text'
					id='location'
					name='location'
					placeholder='...Location'
					value={updatedPosting.location}
					onChange={handleChange}
				/>
			</div>
			<div className='input-wrapper'>
				<label htmlFor='price'>Price: </label>
				<input
					type='number'
					id='price'
					name='price'
					placeholder='...Price'
					value={updatedPosting.price}
					onChange={handleChange}
				/>
			</div>
			<div className='input-wrapper'>
				<label htmlFor='description'>Description: </label>
				<input
					type='text'
					id='description'
					name='description'
					placeholder='...Description'
					value={updatedPosting.description}
					onChange={handleChange}
				/>
			</div>
			<button onClick={handleSubmit}>Update</button>
			<hr />
		</div>
	);
}
