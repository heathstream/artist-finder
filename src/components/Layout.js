import React from "react";
import "../css/style.css";
import "../css/colors-fonts.css";
import Home from "./Home.js";
import Artists from "./Artists.js";
import AddNew from "./AddNew.js";
import Details from "./Details.js";

function Layout() {
	return (
		<div className="layout">
			<div className="header">
				<div className="logo"></div>
				<h1>ArtistFinder</h1>
			</div>
			<div className="menu">
				<div className="menuItemGroup">
					<a href="index.html">
						<div className="menuItem activeMenuItem">Home</div>
					</a>
					<a href="artists.html">
						<div className="menuItem">Artists</div>
					</a>
					<a href="addnew.html">
						<div className="menuItem ">Add new</div>
					</a>
				</div>
			</div>
			<div className="content">
				<Details />
			</div>
			<div className="footer">© Anders Hedström</div>
		</div>
	);
}

export default Layout;
