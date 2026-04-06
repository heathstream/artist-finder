import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import musicGroupService from "../services/musicGroupService.js";
import "../css/colors-fonts.css";
import "../css/style.css";
import "../css/artists.css";

const _service = new musicGroupService("https://music.api.public.seido.se/api");
const PAGE_SIZE = 10;

function Artists() {
	const [musicGroups, setMusicGroups] = useState(null);
	const [seeded, setSeeded] = useState(true);
	const [currentPage, setCurrentPage] = useState(0);
	const [loading, setLoading] = useState(true);
	const [filter, setFilter] = useState("");
	const [searchInput, setSearchInput] = useState("");
	const navigate = useNavigate();

	// Denna funktion laddar om sidan när antingen currentPage, filter eller seeded uppdateras
	useEffect(() => {
		async function loadMusicGroups() {
			setLoading(true);
			const data = await _service.readMusicGroupsAsync(
				currentPage,
				PAGE_SIZE,
				filter,
				seeded,
			);
			setMusicGroups(data);
			setLoading(false);
		}
		loadMusicGroups();
	}, [currentPage, filter, seeded]);

	// Event handlers
	function handleCheckSeeded(e) {
		setSeeded(e.target.checked);
		setSearchInput("");
		setFilter("");
		setCurrentPage(0);
	}

	function handleClickDetails(musicGroupId) {
		navigate(`/details?id=${musicGroupId}`);
	}

	async function handleClickNext() {
		if (currentPage < musicGroups?.pageCount - 1) {
			setCurrentPage((prev) => prev + 1);
		}
	}

	async function handleClickPrev() {
		if (currentPage > 0) {
			setCurrentPage((prev) => prev - 1);
		}
	}

	async function handleClickSearch() {
		setFilter(searchInput.trim());
		setCurrentPage(0);
	}

	function highlightSearchText(text) {
		if (!filter) return text;
		const str = text || "";
		const regex = new RegExp(`(${filter})`, "gi");
		return str.replace(regex, `<span class="highlightSearch">$1</span>`);
	}

	return (
		<div className="artistsContainer rounded1 bordered">
			<div className="subHeader">
				<h2>Artists</h2>
				<div className="browseButtonGroup">
					<button
						id="buttonPrev"
						className="button rounded2"
						onClick={handleClickPrev}>
						&lt;
					</button>
					<button
						id="buttonNext"
						className="button rounded2"
						onClick={handleClickNext}>
						&gt;
					</button>
				</div>
				<span id="paginatorText">
					{musicGroups?.pageItems?.length > 0 ?
						`Showing ${currentPage * PAGE_SIZE + 1}-${Math.min(currentPage * PAGE_SIZE + PAGE_SIZE, musicGroups.dbItemsCount)} of ${musicGroups.dbItemsCount} groups`
					:	`No results found`}
				</span>
				<div className="searchBoxGroup">
					<input
						id="searchBox"
						className="valueInput rounded2"
						placeholder="Led Zeppelin"
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
					/>
					<button
						id="buttonSearch"
						className="button rounded2"
						onClick={handleClickSearch}>
						Search
					</button>
					<div className="seededCheckboxGroup">
						<input
							id="seededCheckbox"
							type="checkbox"
							checked={seeded}
							onChange={handleCheckSeeded}
						/>
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

				{musicGroups?.pageItems.map((group) => (
					<div
						className="tableRow artistsTableRow"
						key={group.musicGroupId}>
						<div className="tableCell artistName">
							{filter ?
								<span
									dangerouslySetInnerHTML={{
										__html: highlightSearchText(group.name),
									}}
								/>
							:	group.name}
						</div>
						<div className="tableCell artistGenre">
							{group.strGenre}
						</div>
						<div className="tableCell artistYear">
							{group.establishedYear}
						</div>
						<div className="tableCell artistAlbums">
							{group.albums?.length ?? 0}
						</div>
						<div className="tableCell artistDetails">
							<button
								className="button detailsButton rounded2"
								onClick={() =>
									handleClickDetails(group.musicGroupId)
								}>
								Info
							</button>
						</div>
					</div>
				))}

				<div id="tableBottom" style={{ height: "2rem" }}></div>

				{loading && (
					<div className="loadingOverlay">
						<p>Loading...</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default Artists;
