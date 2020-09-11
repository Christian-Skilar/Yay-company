import React from "react";
import Footer from "../Footer";
import Container from "react-bootstrap/esm/Container";
import Pagination from "react-bootstrap/Pagination";
import NewsCard from "../NewsCard";

function News() {
	return (
		<div className="wrapper">
			<Container>
				<h2 className="mt-5">News</h2>
				<Pagination className="mt-5 ml-5 ml-md-0">
					<Pagination.Item active>{1}</Pagination.Item>
					<Pagination.Item>{2}</Pagination.Item>
					<Pagination.Item>{3}</Pagination.Item>
					<Pagination.Item>{4}</Pagination.Item>
				</Pagination>
				<NewsCard />
				<Pagination className="mb-5 ml-5 ml-md-0">
					<Pagination.Item active>{1}</Pagination.Item>
					<Pagination.Item>{2}</Pagination.Item>
					<Pagination.Item>{3}</Pagination.Item>
					<Pagination.Item>{4}</Pagination.Item>
				</Pagination>
			</Container>
			<Footer />
		</div>
	);
}

export default News;
