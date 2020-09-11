import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";

function Footer() {
	return (
		<footer className="p-3">
			<Container>
				<Row>
					<Col className="col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start">
						<a href="https://vimeo.com/">
							<i class="fab fa-vimeo-v fa-2x" />
						</a>

						<a href="https://www.youtube.com/">
							<i class="fab fa-youtube fa-2x" />
						</a>
					</Col>
					<Col className="d-flex justify-content-start justify-content-md-center">
						hello@yay.com
					</Col>
					<Col className="d-flex justify-content-end">
						Copyright 2020
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
