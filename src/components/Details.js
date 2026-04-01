import React from "react";
import "../css/colors-fonts.css";
import "../css/style.css";
import "../css/details.css";

function Details() {
	return (
		<>
			<div className="detailsSection rounded1">
				<div className="detailsImage">
					<img
						alt="Artist"
						id="artistImage"
						className="rounded1 bordered"
						src="https://cdn-images.dzcdn.net/images/artist/ebbb1c133ed0220c714b9ed5d254561f/1900x1900-000000-80-0-0.jpg"
					/>
				</div>
				<div className="detailsInfo rounded1 bordered">
					<div className="subHeader">
						<h2>Details</h2>
					</div>
					<div className="detailsInfoEntry">
						<div className="infoKey">Name:</div>
						<div id="name" className="infoValue">
							Gorillaz
						</div>
					</div>
					<div className="detailsInfoEntry">
						<div className="infoKey">Genre:</div>
						<div id="genre" className="infoValue">
							Alternative
						</div>
					</div>
					<div className="detailsInfoEntry">
						<div className="infoKey">Est. year:</div>
						<div id="year" className="infoValue">
							1998
						</div>
					</div>
				</div>
			</div>
			<div className="detailsSection rounded1">
				<div
					id="membersSection"
					className="detailsTable rounded1 bordered">
					<div className="subHeader">
						<h2>Members</h2>
					</div>
					<div id="membersTable">
						<div className="memberRow tableRowTitle">
							<div className="tableCellTitle">Name</div>
							<div className="tableCellTitle">Age</div>
						</div>
						<div className="memberRow tableRow">
							<div className="tableCell">2-D</div>
							<div className="tableCell">25</div>
						</div>
						<div
							id="membersTableBottom"
							style={{ height: "2rem;" }}></div>
					</div>
				</div>
				<div
					id="albumsSection"
					className="detailsTable rounded1 bordered">
					<div className="subHeader">
						<h2>Albums</h2>
					</div>
					<div id="albumsTable">
						<div className="albumRow tableRowTitle">
							<div className="tableCellTitle">Name</div>
							<div className="tableCellTitle">Year</div>
						</div>
						<div className="albumRow tableRow">
							<div className="tableCell">Gorillaz</div>
							<div className="tableCell">2001</div>
						</div>
						<div
							id="albumsTableBottom"
							style={{ height: "2rem;" }}></div>
					</div>
				</div>
			</div>
			<div className="loadingOverlay hidden">
				<p>Loading...</p>
			</div>
		</>
	);
}

export default Details;
