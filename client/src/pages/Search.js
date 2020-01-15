import React, { Component } from "react";
import API from "../utils/API";
import Search from "../components/Search";
import Results from "../components/Results";

class newSearch extends Component {
	state = {
		search: "",
		books: [],
		error: "",
		message: ""
	};

	handleInputChange = event => {
		this.setState({ search: event.target.value })
	}

	handleFormSubmit = event => {
		event.preventDefault();
		API.getBook(this.state.search)
			.then(res => {
				if (res.data.items === "error") {
					throw new Error(res.data.items);
				}
				else {
					let results = res.data.items
					results = results.map(result => {
						result = {
							key: result.id,
							id: result.id,
							title: result.volumeInfo.title,
							authors: result.volumeInfo.authors,
							description: result.volumeInfo.description,
							image: result.volumeInfo.imageLinks.thumbnail,
							link: result.volumeInfo.infoLink
						};
						return result;
					});
					this.setState({ books: results, error: "" })
				};
			})
			.catch(err => this.setState({ error: err.items }));
	};

	handleSavedButton = event => {
		event.preventDefault();
		console.log(this.state.books)
		let savedBooks = this.state.books.filter(book => book.id === event.target.id)
		savedBooks = savedBooks[0];
		API.saveBook(savedBooks)
			.then(this.setState({ message: alert("Your book is saved") }))
			.catch(err => console.log(err))
	};
	render() {
		return (

			<div>
				<Search
					search={this.state.search}
					handleInputChange={this.handleInputChange}
					handleFormSubmit={this.handleFormSubmit}
				/>
				<div className="container">
					<h2>Results</h2>
					<Results books={this.state.books} />
				</div>
			</div>
		);
	};
};

export default newSearch;
