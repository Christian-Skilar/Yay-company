import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import tabimg from "../sass/images/tab-image.jpg";

function ContentTabs() {
	return (
		<Tabs defaultActiveKey="one" id="uncontrolled-tab-example">
			<Tab eventKey="one" title="First">
				<div className="tabContainer d-flex p-5">
					<div>
						<img className="tabImage" src={tabimg} alt="tv" />
					</div>
					<div>
						<p>
							Morbi eget efficitur turpis. Vivamus pellentesque
							tortor massa, venenatis pharetra leo laoreet a.
							Nullam non eleifend justo, a ullamcorper turpis.
							Cras vehicula pharetra lectus non maximus. Sed
							condimentum mattis rhoncus.
						</p>
						<div>
							<a
								className="tabLinks tab-share"
								href="https://www.google.com/"
							>
								Share
							</a>
							<a
								className="tabLinks"
								href="https://www.facebook.com/"
							>
								<i class="fab black-icon fa-facebook-f fa-lg" />
							</a>
							<a
								className="tabLinks"
								href="https://twitter.com/twitter"
							>
								<i class="fab black-icon fa-twitter fa-lg" />
							</a>
						</div>
					</div>
				</div>
			</Tab>
			<Tab className="tabs" eventKey="two" title="Second">
				<div className="tabContainer d-flex p-5">
					<div>
						<img className="tabImage" src={tabimg} alt="tv" />
					</div>
					<div>
						<p>
							Morbi eget efficitur turpis. Vivamus pellentesque
							tortor massa, venenatis pharetra leo laoreet a.
							Nullam non eleifend justo, a ullamcorper turpis.
							Cras vehicula pharetra lectus non maximus. Sed
							condimentum mattis rhoncus.
						</p>
						<div>
							<a
								className="tabLinks tab-share"
								href="https://www.google.com/"
							>
								Share
							</a>
							<a
								className="tabLinks"
								href="https://www.facebook.com/"
							>
								<i class="fab black-icon fa-facebook-f fa-lg" />
							</a>
							<a
								className="tabLinks"
								href="https://twitter.com/twitter"
							>
								<i class="fab black-icon fa-twitter fa-lg" />
							</a>
						</div>
					</div>
				</div>
			</Tab>
			<Tab className="tabs" eventKey="three" title="Third">
				<div className="tabContainer d-flex p-5">
					<div>
						<img className="tabImage" src={tabimg} alt="tv" />
					</div>
					<div>
						<p>
							Morbi eget efficitur turpis. Vivamus pellentesque
							tortor massa, venenatis pharetra leo laoreet a.
							Nullam non eleifend justo, a ullamcorper turpis.
							Cras vehicula pharetra lectus non maximus. Sed
							condimentum mattis rhoncus.
						</p>
						<div>
							<a
								className="tabLinks tab-share"
								href="https://www.google.com/"
							>
								Share
							</a>
							<a
								className="tabLinks"
								href="https://www.facebook.com/"
							>
								<i class="fab black-icon fa-facebook-f fa-lg" />
							</a>
							<a
								className="tabLinks"
								href="https://twitter.com/twitter"
							>
								<i class="fab black-icon fa-twitter fa-lg" />
							</a>
						</div>
					</div>
				</div>
			</Tab>
		</Tabs>
	);
}

export default ContentTabs;
