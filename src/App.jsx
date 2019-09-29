import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import GithubCorner from 'react-github-corner';
import Parent from './components/parent';

function App() {
	return (
		<div id='container'>
			<Parent />
			<footer>
				<div className='text-center'>
					&copy; 2019 &ndash; Guillaume Comte &ndash; All rights reserved
					&ndash; Find me on github{' '}
					<a href='https://github.com/guigui64'>@guigui64</a> &ndash; Icons made
					by{' '}
					<a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
						Freepik
					</a>{' '}
					from{' '}
					<a href='https://www.flaticon.com/' title='Flaticon'>
						www.flaticon.com
					</a>
				</div>
			</footer>
			<GithubCorner href='https://github.com/guigui64/bookfinder' />
		</div>
	);
}

export default App;
