import React from 'react';

export default props => (
	<div
		className='m-5'
		style={{
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fill, 300px)',
			gridGap: '10px',
			justifyContent: 'center'
		}}
	>
		{props.children}
	</div>
);
