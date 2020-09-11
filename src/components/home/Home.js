import React from "react";
import Container from "react-bootstrap/Container";
import Typography from "../Typography";
import ContentAccordion from "../Accordion";
import ContentTabs from "../Tabs";
import Carusel from "../Carusel";
import Footer from "../Footer";

function Home() {
	return <>
			<Carusel />
			<Container>
				<Typography />
			</Container>
			<Container>
				<ContentAccordion />
				<div className="d-none d-md-block">
					<ContentTabs />
				</div>
			</Container>
            <Footer />

    </>;
}

export default Home;
