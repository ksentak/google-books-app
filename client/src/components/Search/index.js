import React from "react";
import "./style.css";

function Search(props) {
	return (
		<div className="container">
			<form>
				<div className="form-group text-center">
					<label htmlFor="search"><h2>Search for a book of interest!</h2></label>
					<input
						onChange={props.handleInputChange}
						value={props.search}
						name="search"
						type="text"
						className="form-control"
						placeholder="Search a Book"
						id="search"
					/>
					<button onClick={props.handleFormSubmit} className="btn search">
						Search
      				</button>
				</div>
			</form>
		</div>
	);
}

export default Search;
