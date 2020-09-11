import React from "react";
import Carousel from "react-bootstrap/Carousel";
import caruselimage from "../sass/images/image.jpg";
import caruselimage2 from "../sass/images/image-2.jpg";
import caruselimage3 from "../sass/images/image-3.jpg";
import Container from "react-bootstrap/esm/Container";

function Carusel() {
	return (
		<Container className="carousel-container col-xl">
			<Carousel>
				<Carousel.Item>
					<img
						className="caruselImage"
						src={caruselimage}
						alt="carousel pic"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="caruselImage"
						src={caruselimage2}
						alt="carousel pic"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="caruselImage"
						src={caruselimage3}
						alt="carousel pic"
					/>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
}

export default Carusel;
