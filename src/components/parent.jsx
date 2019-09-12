import React from 'react';
import SearchBox from './searchbox';

const Parent = () => {
	return (
		<>
			<nav>
				<h2 className='text-center text-uppercase'>Book Finder</h2>
				<SearchBox />
			</nav>
			{/* TODO book cards */}
			{/* <BookCard /> */}
			<footer>
				<div className='text-center'>
					Icons made by{' '}
					<a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
						Freepik
					</a>{' '}
					from{' '}
					<a href='https://www.flaticon.com/' title='Flaticon'>
						www.flaticon.com
					</a>
				</div>
			</footer>
		</>
	);
};

export default Parent;
