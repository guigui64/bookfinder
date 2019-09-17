import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const SearchBox = () => {
	const [searchInput, setSearchInput] = useState('');
	const search = () =>
		console.log('TODO search google books with', searchInput);
	return (
		<InputGroup className='mb-3' style={{ padding: '0 20vw' }}>
			<FormControl
				placeholder='Search for books...'
				aria-label='Book search query'
				aria-describedby='basic-addon2'
				type='search'
				value={searchInput}
				onChange={e => setSearchInput(e.target.value)}
				onKeyUp={e => e.key === 'Enter' && search()}
			/>
			{/* TODO clear search query
			<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> */}
			<InputGroup.Append>
				<Button variant='info' onClick={search}>
					Search
				</Button>
			</InputGroup.Append>
		</InputGroup>
	);
};

export default SearchBox;
