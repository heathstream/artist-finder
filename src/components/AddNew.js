import React, { useState } from "react";
import musicGroupService from "../services/musicGroupService.js";
import "../css/colors-fonts.css";
import "../css/style.css";
import "../css/addnew.css";

const CURRENT_YEAR = new Date().getFullYear();
const _service = new musicGroupService("https://music.api.public.seido.se/api");
const genreOptions = populateGenreOptions();
const yearOptions = populateYearOptions();

function AddNew() {
	const [name, setName] = useState("");
	const [genre, setGenre] = useState("");
	const [year, setYear] = useState("");
	const [nameValid, setNameValid] = useState(false);
	const [genreValid, setGenreValid] = useState(false);
	const [yearValid, setYearValid] = useState(false);
	const [hasChangedName, setHasChangedName] = useState(false);
	const [hasSubmitted, setHasSubmitted] = useState(false);
	const [hasClickedSubmit, setHasClickedSubmit] = useState(false);
	const [submissionValid, setSubmissionValid] = useState(false);

	function handleChangeName(name) {
		setHasChangedName(true);
		const trimmed = name.trim();
		const matchesRegex = /^[a-öA-Ö0-9 ]+$/.test(trimmed);
		setNameValid(trimmed.length > 2 && matchesRegex ? true : false);
		setName(name);
	}

	function handleChangeGenre(genre) {
		setGenreValid(true);
		setGenre(genre);
	}

	function handleChangeYear(year) {
		setYearValid(true);
		setYear(year);
	}

	async function handleSubmit(e) {
		e.preventDefault();
		setHasClickedSubmit(true);

		// Validering:
		setNameValid(name.length < 3 ? false : true);
		setGenreValid(genreOptions.includes(genre) ? true : false);
		setYearValid(year >= 1900 && year <= CURRENT_YEAR ? true : false);
		if (!(nameValid && genreValid && yearValid)) return;

		const newMusicGroup = {
			musicGroupId: null,
			name: name,
			strGenre: genre,
			albums: [],
			artists: [],
			establishedYear: year,
		};

		const submission = await _service.createMusicGroupAsync(newMusicGroup);
		setSubmissionValid(submission ? true : false);
		setHasSubmitted(true);

		// Återställer formuläret
		setName("");
		setGenre("");
		setYear("");
		setNameValid("");
		setGenreValid("");
		setYearValid("");
		setHasChangedName("");
		setHasClickedSubmit(false);
	}

	return (
		<div className="addNewContainer rounded1 bordered">
			<div className="subHeader">
				<h2>Add new artist</h2>
			</div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className="formItems">
					<div className="formItem">
						{(hasChangedName || hasClickedSubmit) && !nameValid && (
							<span className="invalidText invalid">
								Must be at least 3 characters.
							</span>
						)}
						{nameValid && (
							<span className="invalidText valid">✓</span>
						)}
						<input
							className="addNewEntry valueInput rounded2"
							value={name}
							onChange={(e) => handleChangeName(e.target.value)}
							placeholder="Name"
							type="text"
						/>
					</div>

					<div className="formItem">
						{hasClickedSubmit && !genreValid && (
							<span className="invalidText invalid">
								Please select a genre.
							</span>
						)}
						{genreValid && (
							<span className="invalidText valid">✓</span>
						)}
						<select
							className="addNewEntry valueInput rounded2"
							value={genre}
							onChange={(e) => handleChangeGenre(e.target.value)}>
							<option value="" disabled>
								Genre
							</option>
							{genreOptions.map((genre) => (
								<option key={genre} value={genre}>
									{genre}
								</option>
							))}
						</select>
					</div>

					<div className="formItem">
						{hasClickedSubmit && !yearValid && (
							<span className="invalidText invalid">
								Please select a year.
							</span>
						)}
						{yearValid && (
							<span className="invalidText valid">✓</span>
						)}
						<select
							className="addNewEntry valueInput rounded2"
							value={year}
							onChange={(e) => handleChangeYear(e.target.value)}>
							<option value="" disabled>
								Year
							</option>
							{yearOptions.map((year) => (
								<option key={year} value={year}>
									{year}
								</option>
							))}
						</select>
					</div>
				</div>

				<button type="submit" className="submitButton button rounded2">
					Submit
				</button>
			</form>
			{hasSubmitted && submissionValid && (
				<span className="submitStatusText valid">
					Successfully submitted!
				</span>
			)}
			{hasSubmitted && !submissionValid && (
				<span className="submitStatusText invalid">
					{
						"There was an error submitting the form. \nPlease refresh the page."
					}
				</span>
			)}
		</div>
	);
}

function populateGenreOptions() {
	return [
		"Rock",
		"Metal",
		"Alternative",
		"Jazz",
		"Classical",
		"Kids",
		"Country",
		"Folk",
		"R&B",
		"Hiphop",
	];
}

function populateYearOptions() {
	const years = [];
	for (let year = CURRENT_YEAR; year >= 1900; year--) {
		years.push(year);
	}
	return years;
}

export default AddNew;
