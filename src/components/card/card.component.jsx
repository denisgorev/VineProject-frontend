import React from "react";
import "./card.styles.css";
import { Card, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

export const CardComp = (props) => {
    {console.log(props.DC)}
	return (
        
		<Col align="center" xs={12} md={10} lg={6} className='card-container'>
        <Link style={{ color: 'inherit', textDecoration: 'none' }} to={`/${props.DC._id}/drink`}>
			<Card style={{ width: "20rem", marginBottom: '2rem' }}>
				<Card.Img variant='top' src={props.DC.photo} />
				<Card.Body>
					<Card.Title>
						{props.DC.name}
					</Card.Title>
					<Card.Text>
						{props.DC.country}
					</Card.Text>
				</Card.Body>
			</Card>
            </Link>
		</Col>
	);
};
