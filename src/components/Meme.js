/** @format */

import { useState } from "react";
import memesdata from "./memesdata";

const Meme = () => {
	// const [memeImage, setMemeImage] = useState("");
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
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

	function handleForm(event) {
		const { name, value } = event.target;
		setMeme((prevMemeInput) => ({
			...prevMemeInput,
			[name]: value,
		}));
	}

	return (
		<main>
			<form>
				<input
					onChange={handleForm}
					value={meme.topText}
					name="topText"
					type="text"
					placeholder="Top Text"
					className="topinput"
				/>
				<input
					onChange={handleForm}
					value={meme.bottomText}
					name="bottomText"
					type="text"
					placeholder="Bottom Text"
					className="bottominput"
				/>
				<button onClick={generateImage}>Get a new meme image 🖼</button>
			</form>

			<div className="meme">
				<img src={meme.randomimage} className="meme--image" alt="" />
				<h2 className="meme--text top">{meme.topText}</h2>
				<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
		</main>
	);
};
export default Meme;
