/** @format */

import { useState } from "react";
import memesdata from "./memesdata";

const Meme = () => {
	// const [memeImage, setMemeImage] = useState("");
	const [meme, setMeme] = useState({
		toptext: "",
		bottomtext: "",
		randomimage:
			"https://i.pinimg.com/736x/46/2f/af/462fafbf63e981c2cc4bd699da32bab6.jpg",
	});

	const [allMemeData, setAllMemeData] = useState(memesdata);

	function generateImage() {
		const memesArray = allMemeData.data.memes;
		const randomMeme = Math.floor(Math.random() * memesArray.length);
		const url = memesArray[randomMeme].url;
		setMeme((prevMeme) => ({
			...prevMeme,
			randomimage: url,
		}));
	}

	const handleChange = (event) => {
		const [name, value] = event.target
		setAllMemeData(prevMemeData => {
			return {
				...prevMemeData,
				[name]: value
			}
		})
	};

	return (
		<main>
			<div className="form">
				<input
					type="text"
					onChange={handleChange}
					value={meme.toptext}
					name="toptext"
					placeholder="Top Text"
				/>
				<input
					type="text"
					onChange={handleChange}
					value={meme.bottomtext}
					name="bottomtext"
					placeholder="Bottom Text"
				/>
				<button onClick={generateImage}>Get a new meme image 🖼</button>
			</div>
			<div className="meme">
				<img src={meme.randomimage} className="meme--image" alt="" />
				<h2 className="meme--text top">One does not simply</h2>
				<h2 className="meme--text bottom">Walk into Mordor</h2>
			</div>
		</main>
	);
};
export default Meme;
