import { gql } from 'apollo-boost';

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

export const DELETE_POSTING = gql`
	mutation DeletePosting($id: String!) {
		deletePosting(id: $id) {
			id
			coach
		}
	}
`;

export const UPDATE_POSTING = gql`
	mutation UpdatePosting(
		$id: String!
		$coach: String
		$title: String
		$industry: String
		$location: String
		$price: Int
		$description: String
	) {
		updatePosting(
			id: $id
			coach: $coach
			title: $title
			industry: $industry
			location: $location
			price: $price
			description: $description
		) {
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
