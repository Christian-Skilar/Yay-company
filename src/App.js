import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink
  } from "react-router-dom";
import "./sass/styles.scss";


import Home from "./components/home/Home";
import News from "./components/news/News";
import Contact from "./components/contact/ContactPage";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";

function App() {
	return (
		<>
		 <Router>
      <div>

	  	<Navbar expand="md">
		  <Container>
		  <Navbar.Brand href="#home">The YAY Company</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<NavLink className="nav-link" exact to="/">Home</NavLink>
						<NavLink className="nav-link" to="/news">News</NavLink>
						<NavLink className="nav-link" to="/contact">Contact</NavLink>
					</Nav>
					<Form className="mt-md-0 mt-3" inline>
						<FormControl
							type="text"
							placeholder="Search"
							className="mr-sm-2"
						/>
						<Button className="src-btn" variant="outline-success">
							Go
						</Button>
					</Form>
				</Navbar.Collapse>
		  </Container>
		</Navbar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>


		</>
	);
}

export default App;
