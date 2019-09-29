import React, { useState } from 'react';
import BookCard from './book-card';
import CardGroup from './card-group';
import SearchBox from './searchbox';

const Parent = () => {
	const [books, setBooks] = useState([]);
	const [noResult, setNoResult] = useState(false);
	return (
		<div id='content'>
			<nav className='text-center pt-3'>
				<img src='logo.png' alt='logo' width='10%' />
				<h2 className='text-uppercase mb-3'>Book Finder</h2>
				<SearchBox setBooks={setBooks} setNoResult={setNoResult} />
			</nav>
			{/* TODO book cards */}
			{noResult ? (
				<p style={{ textAlign: 'center' }}>
					Sorry, no result. Try another search.
				</p>
			) : (
				<CardGroup>
					{books.map((volume, i) => (
						<BookCard
							key={i}
							imgSrc={
								volume.volumeInfo.imageLinks &&
								volume.volumeInfo.imageLinks.thumbnail
							}
							title={volume.volumeInfo.title}
							author={
								volume.volumeInfo.authors
									? volume.volumeInfo.authors.join(', ')
									: 'No author'
							}
							publisher={volume.volumeInfo.publisher}
							link={volume.volumeInfo.infoLink}
						/>
					))}
				</CardGroup>
			)}
		</div>
	);
};

export default Parent;
