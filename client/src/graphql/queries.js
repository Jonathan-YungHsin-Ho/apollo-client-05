import { gql } from 'apollo-boost';

export const GET_POSTINGS = gql`
	query {
		postings {
			id
			coach
			title
			industry
			location
			price
			description
		}
	}
`;
