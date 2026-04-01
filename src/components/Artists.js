import React from "react";
import "../css/colors-fonts.css";
import "../css/style.css";
import "../css/artists.css";

function Artists() {
	return (
		<div className="artistsContainer rounded1 bordered">
			<div className="subHeader">
				<h2>Artists</h2>
				<div className="browseButtonGroup">
					<button id="buttonPrev" className="button rounded2">
						&lt;
					</button>
					<button id="buttonNext" className="button rounded2">
						&gt;
					</button>
				</div>
				<span id="paginatorText">X - X of X</span>
				<div className="searchBoxGroup">
					<input
						id="searchBox"
						className="valueInput rounded2"
						placeholder="Led Zeppelin"
					/>
					<button id="buttonSearch" className="button rounded2">
						Search
					</button>
					<div className="seededCheckboxGroup">
						<input id="seededCheckbox" type="checkbox" checked />
						<span>Seeded</span>
					</div>
				</div>
			</div>
			<div className="artistsTable">
				<div className="tableRowTitle">
					<div className="tableCellTitle artistName">Name</div>
					<div className="tableCellTitle artistGenre">Genre</div>
					<div className="tableCellTitle artistYear">Year</div>
					<div className="tableCellTitle artistAlbums">Albums</div>
				</div>

				<div className="loadingOverlay">
					<p>Loading...</p>
				</div>
				<div id="tableBottom" style={{ height: "2rem;" }}></div>
			</div>
		</div>
	);
}

export default Artists;
