import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function YayContact() {
	return (
		<Container>
			<Row>
				<Col className="col-12 order-2 order-md-1">
					<h2 className="mt-5">Submit your details</h2>
				</Col>
				<Col className="col-12 col-md-5 order-1 order-md-3 ml-md-5 ml-0">
					<Row className="mt-5">
						<Col className="d-flex">
							<i class="fas fa-envelope fa-2x" />
							<p>Hello@yay.com</p>
						</Col>
					</Row>

					<Row className="mt-4">
						<Col className="d-flex">
							<i class="fas fa-phone-alt fa-2x" />
							<p>123 45 678</p>
						</Col>
					</Row>

					<Row className="mt-4">
						<Col className="d-flex">
							<i class="fas fa-map-marker-alt fa-2x" />
							<div>
								<p>123 Some Street</p>
								<p>Somewhere</p>
								<p>Some City</p>
								<p>10000</p>
							</div>
						</Col>
					</Row>
				</Col>

				<Col className="col-12 col-md-6 order-3 order-md-2">
					<Form>
						<Form.Label className=" mt-4">Name</Form.Label>
						<Form.Control placeholder="First name" />

						<Form.Group controlId="formBasicEmail">
							<Form.Label className=" mt-4">Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
							/>
						</Form.Group>

						<Form.Label className=" mt-4">Website</Form.Label>
						<InputGroup className="mb-3">
							<InputGroup.Prepend>
								<InputGroup.Text
									className="d-none d-md-block"
									id="basic-addon3"
								>
									https://
								</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								id="basic-url"
								aria-describedby="basic-addon3"
							/>
						</InputGroup>
						<Form.Label className=" mt-4">Message</Form.Label>
						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Control as="textarea" rows="5" />
						</Form.Group>

						<Form.Group
							className="checkbox-container"
							controlId="formBasicCheckbox"
						>
							<Form.Check className="box-input" type="checkbox" />
							<span className="checkmark" />
						</Form.Group>
						<p className="checkbox-text">
							Allow us to sell your personal details to whomever
							we want
						</p>

						<Button
							className="contact-btn my-3 col-12 p-2"
							variant="primary"
							type="submit"
						>
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default YayContact;
