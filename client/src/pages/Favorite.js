import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Results";

class Favorites extends Component {
	state = {
		favoriteBooks: [],
	}

	componentDidMount() {
		API.savedBooks()
			.then(favoriteBooks => this.setState({ favoriteBooks: favoriteBooks }))
			.catch(err => console.error(err));
	}

	render() {
		return (
			<div className="container">
				<h2>Favorite books</h2>
				<Results books={this.state.favoriteBooks} />
			</div>
		)
	}
}

export default Favorites;
