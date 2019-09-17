import React from 'react';

export default props => (
	<div
		className='m-5'
		style={{
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
			gridGap: '30px',
			justifyContent: 'center'
		}}
	>
		{props.children}
	</div>
);
