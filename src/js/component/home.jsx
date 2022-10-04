import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx"
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<br />
			<div className='d-flex flex-row mb-3 justify-content-center'>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
