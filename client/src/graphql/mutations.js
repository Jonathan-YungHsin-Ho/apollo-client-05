import { gql } from './node_modules/apollo-boost';

export const ADD_POSTING = gql`
	mutation AddPosting(
		$coach: String!
		$title: String!
		$industry: String!
		$location: String!
		$price: Int!
		$description: String!
	) {
		addPosting(
			coach: $coach
			title: $title
			industry: $industry
			location: $location
			price: $price
			description: $description
		) {
			coach
			title
			industry
			location
			price
			description
		}
	}
`;
