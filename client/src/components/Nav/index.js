import React from "react";
import "./style.css";

function Navbar() {
	return (

		<nav class="navbar navbar-expand-lg navbar-light">
			<div className="navbar-brand text-white">Google Books App</div>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link text-white link" href="/">Search <span className="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-white link" href="/favorites">Favorites</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
