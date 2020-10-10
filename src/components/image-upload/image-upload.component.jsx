import React from "react";
import { Form } from "react-bootstrap";

class ImageUpload extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			file: null,
			filePreview: null,
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		console.log(event.target.files[0]);
		this.setState(
			{
				file: event.target.files[0],
				loaded: 0,
				filePreview: URL.createObjectURL(event.target.files[0]),
			},
			() => this.props.onInput(this.state.file)
		);
	}
	render() {
		return (
			<div>
				<Form>
					<Form.File id='custom-file' onChange={this.handleChange} label='Фото' data-browse="Найти" custom />
				</Form>
				{/* <input type='file' onChange={this.handleChange} /> */}
				<img src={this.state.filePreview} width='60' />
			</div>
		);
	}
}

export default ImageUpload;
