import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg px-5 p-0">
		<div className="container-fluid p-0">
			<a className="navbar-brand" href="#!">
				<h1 className="m-0"><i className="fas fa-utensils"></i> Restoran</h1>
			</a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-4">
					<li className="nav-item">
						<NavLink className="nav-link" to="/">Home</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/about">about</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/service">service</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/menu">menu</NavLink>
					</li>
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							pages
						</a>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Booking</a></li>
							<li><a className="dropdown-item" href="#">Our Team</a></li>
							<li><a className="dropdown-item" href="#">Testimonial</a></li>
						</ul>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to='/contact'>contact</NavLink>
					</li>
				</ul>
				<a href="#!" className="btn btn-primary py-2 px-4">Book A Table</a>
			</div>
		</div>
	</nav>
	)
}
