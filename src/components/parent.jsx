import React from 'react';
import SearchBox from './searchbox';

const Parent = () => {
	return (
		<>
			<h2 className='text-center text-uppercase'>Book Finder</h2>
			<SearchBox />
			{/* TODO book cards */}
			{/* <BookCard /> */}
		</>
	);
};

export default Parent;
