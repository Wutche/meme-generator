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

  const [allMemeData, setAllMemeData] = useState(memesdata)

	function generateImage() {
		const memesArray = allMemeData.data.memes;
		const randomMeme = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomMeme].url;
		setMeme((prevMeme) => ({
			...prevMeme,
			randomimage: url,
		}));
	}
	return (
		<main>
			<div className="form">
				<input type="text" placeholder="Top Text" />
				<input type="text" placeholder="Bottom Text" />
				<button onClick={generateImage}>Get a new meme image 🖼</button>
			</div>

      <img src={meme.randomimage} className= "meme--image" alt="" />
		</main>
	);
};
export default Meme;
