import React from 'react';
import { Button, Card } from 'react-bootstrap';

const BookCard = ({ imgSrc, title, author, publisher, link }) => (
	<Card bg='light'>
		<Card.Img
			variant='top'
			src={imgSrc}
			style={{ height: '100%', width: '100%', objectFit: 'contain' }}
		/>
		<Card.Body>
			<Card.Title>{title}</Card.Title>
			<Card.Text>
				{`By: ${author}`}
				<br />
				{`Published by: ${publisher}`}
			</Card.Text>
			<Button variant='success' href={link} target='_blank'>
				See this book
			</Button>
		</Card.Body>
	</Card>
);

export default BookCard;
