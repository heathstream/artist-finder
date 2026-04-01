import React from "react";
import "../css/colors-fonts.css";
import "../css/style.css";

function Home() {
	return (
		<div class="container rounded1 bordered">
			<h1 class="welcomeTitle">Welcome to ArtistFinder!</h1>
			<p>
				This is an app where you can browse different artists to learn
				more about them. You can also add your own artist or band to the
				roster. Have fun!
			</p>
			<p>
				Made by Anders Hedström for the web development course at
				Teknikhögskolan.
			</p>
		</div>
	);
}

export default Home;
