import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import PostingCard from './PostingCard';

import { GET_POSTINGS } from '../graphql/queries';

export default function PostingsList() {
	const { loading, error, data } = useQuery(GET_POSTINGS);

	return (
		<div>
			<h2>Postings</h2>
			{loading && <p>Loading...</p>}
			{error && <p>Error! {error}</p>}
			<div className='postings-wrapper'>
				{data &&
					data.postings.map(posting => (
						<PostingCard key={posting.id} posting={posting} />
					))}
			</div>
		</div>
	);
}
