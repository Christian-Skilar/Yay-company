import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import News1 from "../sass/images/news-1.png";
import News2 from "../sass/images/news-2.png";
import News3 from "../sass/images/news-3.png";
import News4 from "../sass/images/news-4.png";
import News5 from "../sass/images/news-5.png";
import News6 from "../sass/images/news-6.png";
import News7 from "../sass/images/news-7.png";
import News8 from "../sass/images/news-8.png";

function NewsCard() {
	return (
		<>
			<Row className="my-5 d-flex justify-content-center">
				<Col className="col-10 col-md-6 col-lg-3 mb-5">
					<Card className="card">
						<Card.Img variant="top" src={News1} />
						<Card.Body>
							<Card.Title>News Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card.
							</Card.Text>
							<Button className="card-btn" variant="primary">More</Button>
						</Card.Body>
					</Card>
				</Col>

				<Col className="col-10 col-md-6 col-lg-3 mb-5">
					<Card className="card">
						<Card.Img variant="top" src={News2} />
						<Card.Body>
							<Card.Title>News Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card.
							</Card.Text>
							<Button className="card-btn" variant="primary">More</Button>
						</Card.Body>
					</Card>
				</Col>

				<Col className="col-10 col-md-6 col-lg-3 mb-5">
					<Card className="card">
						<Card.Img variant="top" src={News3} />
						<Card.Body>
							<Card.Title>News Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card.
							</Card.Text>
							<Button className="card-btn" variant="primary">More</Button>
						</Card.Body>
					</Card>
				</Col>

				<Col className="col-10 col-md-6 col-lg-3 mb-5">
					<Card className="card">
						<Card.Img variant="top" src={News4} />
						<Card.Body>
							<Card.Title>News Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card.
							</Card.Text>
							<Button className="card-btn" variant="primary">More</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>

            <Row className="my-5 d-flex justify-content-center">
				<Col className="col-10 col-md-6 col-lg-3 mb-5">
					<Card className="card">
						<Card.Img variant="top" src={News5} />
						<Card.Body>
							<Card.Title>News Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card.
							</Card.Text>
							<Button className="card-btn" variant="primary">More</Button>
						</Card.Body>
					</Card>
				</Col>

				<Col className="col-10 col-md-6 col-lg-3 mb-5">
					<Card className="card">
						<Card.Img variant="top" src={News6} />
						<Card.Body>
							<Card.Title>News Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card.
							</Card.Text>
							<Button className="card-btn" variant="primary">More</Button>
						</Card.Body>
					</Card>
				</Col>

				<Col className="col-10 col-md-6 col-lg-3 mb-5">
					<Card className="card">
						<Card.Img variant="top" src={News7} />
						<Card.Body>
							<Card.Title>News Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card.
							</Card.Text>
							<Button className="card-btn" variant="primary">More</Button>
						</Card.Body>
					</Card>
				</Col>

				<Col className="col-10 col-md-6 col-lg-3 mb-5">
					<Card className="card">
						<Card.Img variant="top" src={News8} />
						<Card.Body>
							<Card.Title>News Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card.
							</Card.Text>
							<Button className="card-btn" variant="primary">More</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
}

export default NewsCard;
