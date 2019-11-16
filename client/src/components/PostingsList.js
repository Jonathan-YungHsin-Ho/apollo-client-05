import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import PostingCard from './PostingCard';

const GET_POSTINGS = gql`
	query {
		postings {
			coach
			title
			industry
			location
			price
			description
		}
	}
`;

export default function PostingsList() {
	const { loading, error, data } = useQuery(GET_POSTINGS);

	return (
		<div>
			<h2>Postings</h2>
			{loading && <p>Loading...</p>}
			{error && <p>Error! {error}</p>}
			<div className='postings-wrapper'>
				{data &&
					data.postings.map(posting => <PostingCard posting={posting} />)}
			</div>
		</div>
	);
}
