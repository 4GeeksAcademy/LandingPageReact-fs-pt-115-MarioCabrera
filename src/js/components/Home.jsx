import React from "react";
import { useState } from "react";

//include images into your bundle
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { descriptionData, cardInfo } from "./variables";
import { Cards } from "./cards";

//create your first component
const Home = () => {

	const [darkmode, setDarkmode] = useState(false);
	const toggleMode = () => {
		setDarkmode(!darkmode)

	}
	const [randImg, setRandImg] = useState(
		cardInfo.map(() => `https://picsum.photos/500/325?random=${Math.floor(Math.random() * 1000)}`)
	);
	const changeImg = () => {
		setRandImg(
			cardInfo.map(() => `https://picsum.photos/500/325?random=${Math.floor(Math.random() * 1000)}`)
		);
	}
	const changeOneImg = (index) => {
		const newImages = [...randImg];
		newImages[index] = `https://picsum.photos/500/325?random=${Math.floor(Math.random() * 1000)}`
		setRandImg(newImages);
		
	}
	const JumbotronData = {
		title: descriptionData.title,
		button1: descriptionData.firstbuttonLabel,
		button2: descriptionData.secondbuttonLabel,
		description: descriptionData.description,
		changeMode: toggleMode,
		darkmode: darkmode,
		changeImg: changeImg
	}
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron data={JumbotronData} />
				<div className="row row-cols-1 row-cols-md-4 g-4 px-4">
					{cardInfo.map((item, index) => (
						<Cards data = {{
							key:index,
							index:index,
							title:item.title,
							text:item.description,
							button:item.buttonLabel,
							darkmode:darkmode,
							randImg:randImg[index],
							changeImg:changeImg,
							changeOneImg:changeOneImg,
						}}
						/>
					))}
				</div>
			</div>
			<footer className="bg-dark text-white text-center py-3 mt-5">
				<div className="container">
					<p className="mb-0">Copyright© 2025 Mi Sitio Web. Todos los derechos reservados.</p>
				</div>
			</footer>
		</>
	);
};

export default Home;