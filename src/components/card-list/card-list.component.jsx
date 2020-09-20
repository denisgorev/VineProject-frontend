import React from "react";
import { CardComp } from "../card/card.component";
import { Container, Row, Button, Col } from "react-bootstrap";
import "./card-list.styles.css";

export const CardList = (props) => {
	props.DCs.forEach((el) => console.log(el));

	return (
		<Container>
			<Row>
				{props.DCs.map((DC) => (
					<CardComp key={DC._id} DC={DC} />
				))}
			</Row>
		</Container>
	);
};

// {/* <h1>{DC.alcoKind}</h1>  */}
