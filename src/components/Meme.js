/** @format */

import React from "react";
import { useEffect, useState } from "react";
// import memesdata from "./memesdata";

const Meme = () => {
	// const [memeImage, setMemeImage] = useState("");
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "https://i.imgflip.com/30b1gx.jpg",
	});

	const [allMeme, setAllMeme] = useState([]);

	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((res) => res.json())
			.then((data) => setAllMeme(data.data.memes));
	}, []);

	function generateImage() {
		const randomNumber = Math.floor(Math.random() * allMeme.length);
		const url = allMeme[randomNumber].url;
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
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
		<main className="main">
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
			</form>
			<button onClick={generateImage}>Get a new meme image 🖼</button>

			<div className="meme">
				<img src={meme.randomImage} className="meme--image" alt="" />
				<h2 className="meme--text top">{meme.topText}</h2>
				<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
		</main>
	);
};
export default Meme;
