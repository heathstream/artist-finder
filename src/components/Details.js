import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import musicGroupService from "../services/musicGroupService.js";
import "../css/colors-fonts.css";
import "../css/style.css";
import "../css/details.css";

const _service = new musicGroupService("https://music.api.public.seido.se/api");

function Details() {
	const [searchParams] = useSearchParams();
	const [loading, setLoading] = useState(false);
	const [musicGroup, setMusicGroup] = useState(null);

	useEffect(() => {
		async function loadMusicGroup() {
			setLoading(true);
			const id = searchParams.get("id");
			const data = await _service.readMusicGroupAsync(id);
			setMusicGroup(data.item);
			setLoading(false);
		}
		loadMusicGroup();
	}, [searchParams]);

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
							{musicGroup?.name}
						</div>
					</div>
					<div className="detailsInfoEntry">
						<div className="infoKey">Genre:</div>
						<div id="genre" className="infoValue">
							{musicGroup?.strGenre}
						</div>
					</div>
					<div className="detailsInfoEntry">
						<div className="infoKey">Est. year:</div>
						<div id="year" className="infoValue">
							{musicGroup?.establishedYear}
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
						{musicGroup?.artists?.map((member) => (
							<div
								className="memberRow tableRow"
								key={member.artistId}>
								<div className="tableCell">{`${member.firstName} ${member.lastName}`}</div>
								<div className="tableCell">
									{member.birthDay ?
										Math.round(
											(Date.now() -
												new Date(
													Date.parse(member.birthDay),
												).getTime()) /
												(1000 * 60 * 60 * 24 * 365.25),
										)
									:	"N/A"}
								</div>
							</div>
						))}
						<div
							id="membersTableBottom"
							style={{ height: "2rem" }}></div>
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
						{musicGroup?.albums?.map((album) => (
							<div
								className="albumRow tableRow"
								key={album.albumId}>
								<div className="tableCell">{album.name}</div>
								<div className="tableCell">
									{album.releaseYear}
								</div>
							</div>
						))}
						<div
							id="albumsTableBottom"
							style={{ height: "2rem" }}></div>
					</div>
				</div>
			</div>
			{loading && (
				<div className="loadingOverlay hidden">
					<p>Loading...</p>
				</div>
			)}
		</>
	);
}

export default Details;
