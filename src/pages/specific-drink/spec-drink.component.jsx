import React from "react";
import { withRouter } from "react-router";
import { Card, Button } from "react-bootstrap";

class SpecDrink extends React.Component {
	constructor() {
		super();
		this.state = {
			drink: [],
		};
	}

	async componentWillMount() {
		const did = this.props.match.params.did;
		const response = await fetch(`http://192.168.0.16:5000/api/drinks/${did}`);

		const json = await response.json();
		await this.setState({ drink: json.drink[0] });
	}

	render() {
		const drinkName = this.state.drink.name;
        const country = this.state.drink.country;
        const rate = this.state.drink.rate;
        const comment = this.state.drink.comment;
        const date = this.state.drink.date;
        const placeOfConsumption = this.state.drink.placeOfConsumption;
        

		return (
            <div align="center">
			<Card style={{ width: "18rem" }}>
				<Card.Img variant='top' src={this.state.drink.photo} />
				<Card.Body>
					<Card.Title>{drinkName}</Card.Title>
                    <div align='left'>
					<Card.Text>
                        Страна производитель: {country}
					</Card.Text>
                    <Card.Text>
                        {date}
					</Card.Text>
                    {placeOfConsumption && <Card.Text>
                        Место пития: {placeOfConsumption}
					</Card.Text>}
                    <Card.Text>
                        Оценка: {rate}
					</Card.Text>
                    <Card.Text>
                        Комментарий: {comment}
					</Card.Text>
                    </div>

					{/* <Button variant='primary'>Go somewhere</Button> */}
				</Card.Body>
			</Card>
            </div>
		);
	}
}

export default withRouter(SpecDrink);
