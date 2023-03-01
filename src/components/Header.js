import image from "../images/TrollFace.png"

const Header = () => {
  return (
		<header>
			<img src={image} alt="" />
			<h1>Meme Generator</h1>
			<h4>React Course - Project 3</h4>
		</header>
	);
}

export default Header