import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import EditPosting from './EditPosting';

import { DELETE_POSTING } from '../graphql/mutations';
import { GET_POSTINGS } from '../graphql/queries';

export default function PostingCard({ posting }) {
	const [toggleEdit, setToggleEdit] = useState(false);

	const [deletePosting] = useMutation(DELETE_POSTING, {
		update(cache, { data: { deletePosting } }) {
			const { postings } = cache.readQuery({ query: GET_POSTINGS });
			// console.log(deletePosting);
			cache.writeQuery({
				query: GET_POSTINGS,
				data: {
					postings: postings.filter(posting => posting.id !== deletePosting.id),
				},
			});
		},
	});

	const handleEdit = () => {
		setToggleEdit(!toggleEdit);
	};

	const handleDelete = () => {
		// console.log(posting.id);
		deletePosting({ variables: { id: posting.id } });
	};

	return (
		<div className='posting-card'>
			<h3>
				<span>Coach:</span> {posting.coach}
			</h3>
			<p>
				<span className='bold'>Title:</span> {posting.title}
			</p>
			<p>
				<span className='bold'>Industry:</span> {posting.industry.name}
			</p>
			<p>
				<span className='bold'>Location:</span> {posting.location}
			</p>
			<p>
				<span className='bold'>Price:</span> ${posting.price}/hour
			</p>
			<p>
				<span className='bold'>Description:</span> {posting.description}
			</p>
			{toggleEdit && <EditPosting posting={posting} handleEdit={handleEdit} />}
			<button onClick={handleEdit}>
				{toggleEdit ? 'Cancel Edit' : 'Edit'}
			</button>
			<button onClick={handleDelete}>Delete</button>
		</div>
	);
}
