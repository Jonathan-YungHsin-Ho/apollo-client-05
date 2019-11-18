import React from 'react';

export default function PostingCard({ posting }) {
	return (
		<div className='posting-card'>
			<h3>
				<span>Coach:</span> {posting.coach}
			</h3>
			<p>
				<span className='bold'>Title:</span> {posting.title}
			</p>
			<p>
				<span className='bold'>Industry:</span> {posting.industry}
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
			<button>Delete</button>
		</div>
	);
}
