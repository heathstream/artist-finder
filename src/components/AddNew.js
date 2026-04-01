import React from "react";
import "../css/colors-fonts.css";
import "../css/style.css";
import "../css/addnew.css";

function AddNew() {
	return (
		<div className="addNewContainer rounded1 bordered">
			<div className="subHeader">
				<h2>Add new artist</h2>
			</div>
			<form>
				<div className="formItems">
					<div className="formItem">
						<span
							id="nameInvalidText"
							className="invalidText invalid"></span>
						<input
							className="addNewEntry valueInput rounded2"
							id="name"
							placeholder="Name"
							type="text"
							required
						/>
					</div>

					<div className="formItem">
						<span
							id="genreInvalidText"
							className="invalidText invalid"></span>
						<select
							className="addNewEntry valueInput rounded2"
							id="genre"
							required>
							<option value="" disabled selected>
								Genre
							</option>
						</select>
					</div>

					<div className="formItem">
						<span
							id="yearInvalidText"
							className="invalidText invalid"></span>
						<select
							className="addNewEntry valueInput rounded2"
							id="year"
							required>
							<option value="" disabled selected>
								Year
							</option>
						</select>
					</div>
				</div>

				<input type="submit" className="submitButton button rounded2" />
			</form>
			<span id="submitStatusText"></span>
		</div>
	);
}

export default AddNew;
