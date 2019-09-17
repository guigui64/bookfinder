import React from 'react';
import BookCard from './book-card';
import CardGroup from './card-group';
import SearchBox from './searchbox';

const Parent = () => {
	return (
		<>
			<div id='container'>
				<div id='content'>
					<nav className='text-center pt-3'>
						<img src='logo.png' alt='logo' width='10%' />
						<h2 className='text-uppercase mb-3'>Book Finder</h2>
						<SearchBox />
					</nav>
					{/* TODO book cards */}
					<CardGroup>
						<BookCard />
						<BookCard />
						<BookCard />
						<BookCard />
						<BookCard />
					</CardGroup>
				</div>
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
			</div>
		</>
	);
};

export default Parent;
