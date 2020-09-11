import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import tabimg from "../sass/images/tab-image.jpg";

function ContentAccordion() {
	return (
		<Accordion defaultActiveKey="0" className="d-md-none">
			<Card>
				<Card.Header>
					<Accordion.Toggle as={Button} variant="link" eventKey="0">
						First
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="0">
					<Card.Body>
						<div className="tabContainer">
							<p className="d-block">
								Morbi eget efficitur turpis. Vivamus
								pellentesque tortor massa, venenatis pharetra
								leo laoreet a. Nullam non eleifend justo, a
								ullamcorper turpis. Cras vehicula pharetra
								lectus non maximus. Sed condimentum mattis
								rhoncus.
							</p>
							<div className="d-block text-center">
								<img
									className="tabImage mt-2"
									src={tabimg}
									alt="tv"
								/>
							</div>
							<div>
								<div className="tabLinks d-block text-center mt-4">
									<a
										className="tab-share"
										href="https://www.google.com/"
									>
										Share
									</a>
									<a
										className="tabLinks"
										href="https://www.facebook.com/"
									>
										<i class="fab fa-facebook-f fa-lg" />
									</a>
									<a
										className="tabLinks"
										href="https://twitter.com/twitter"
									>
										<i class="fab fa-twitter fa-lg" />
									</a>
								</div>
							</div>
						</div>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
			<Card>
				<Card.Header>
					<Accordion.Toggle as={Button} variant="link" eventKey="1">
						Second
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="1">
					<Card.Body>
						<div className="tabContainer">
							<p className="d-block">
								Morbi eget efficitur turpis. Vivamus
								pellentesque tortor massa, venenatis pharetra
								leo laoreet a. Nullam non eleifend justo, a
								ullamcorper turpis. Cras vehicula pharetra
								lectus non maximus. Sed condimentum mattis
								rhoncus.
							</p>
							<div className="d-block text-center">
								<img
									className="tabImage mt-2"
									src={tabimg}
									alt="tv"
								/>
							</div>
							<div>
								<div className="tabLinks d-block text-center mt-4">
									<a
										className="tab-share"
										href="https://www.google.com/"
									>
										Share
									</a>
									<a
										className="tabLinks"
										href="https://www.facebook.com/"
									>
										<i class="fab fa-facebook-f fa-lg" />
									</a>
									<a
										className="tabLinks"
										href="https://twitter.com/twitter"
									>
										<i class="fab fa-twitter fa-lg" />
									</a>
								</div>
							</div>
						</div>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
			<Card>
				<Card.Header>
					<Accordion.Toggle as={Button} variant="link" eventKey="2">
						Third
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="2">
					<Card.Body>
						<div className="tabContainer">
							<p className="d-block">
								Morbi eget efficitur turpis. Vivamus
								pellentesque tortor massa, venenatis pharetra
								leo laoreet a. Nullam non eleifend justo, a
								ullamcorper turpis. Cras vehicula pharetra
								lectus non maximus. Sed condimentum mattis
								rhoncus.
							</p>
							<div className="d-block text-center">
								<img
									className="tabImage mt-2"
									src={tabimg}
									alt="tv"
								/>
							</div>
							<div>
								<div className="tabLinks d-block text-center mt-4">
									<a
										className="tab-share"
										href="https://www.google.com/"
									>
										Share
									</a>
									<a
										className="tabLinks"
										href="https://www.facebook.com/"
									>
										<i class="fab fa-facebook-f fa-lg" />
									</a>
									<a
										className="tabLinks"
										href="https://twitter.com/twitter"
									>
										<i class="fab fa-twitter fa-lg" />
									</a>
								</div>
							</div>
						</div>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
}

export default ContentAccordion;
