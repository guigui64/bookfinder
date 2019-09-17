import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

function timeout(ms, promise) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			reject(new Error('timeout'));
		}, ms);
		promise.then(resolve, reject);
	});
}

const SearchBox = ({ setBooks, setNoResult }) => {
	const [searchInput, setSearchInput] = useState('');
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		if (searchInput.trim().length === 0) {
			setNoResult(false);
			setBooks([]);
		}
	}, [searchInput, setNoResult, setBooks]);

	const search = () => {
		setLoading(true);
		timeout(
			10000,
			fetch(
				`https://www.googleapis.com/books/v1/volumes?q={${searchInput}}&langRestrict=en&orderBy=newest`
			)
		)
			.then(response => response.json())
			.then(data => {
				setBooks(data.items || []);
				setNoResult(data.totalItems === 0);
			})
			.catch(error => {
				console.error(error);
				if (error.message === 'timeout') {
					alert('Search took too much time...');
				} else {
					alert('Impossible to get the books from Google!');
				}
				setSearchInput('');
			})
			.finally(() => setLoading(false));
	};
	return (
		<InputGroup className='mb-3' style={{ padding: '0 20vw' }}>
			<FormControl
				placeholder='Search for books...'
				aria-label='Book search query'
				aria-describedby='basic-addon2'
				type='search'
				value={searchInput}
				onChange={e => setSearchInput(e.target.value)}
				onKeyUp={e =>
					searchInput.trim().length !== 0 && e.key === 'Enter' && search()
				}
			/>
			<InputGroup.Append>
				<Button
					variant='info'
					onClick={search}
					disabled={searchInput.trim().length === 0}
				>
					{isLoading ? 'Loading...' : 'Search'}
				</Button>
			</InputGroup.Append>
		</InputGroup>
	);
};

export default SearchBox;
