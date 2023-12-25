import React from 'react'
import { NavLink } from 'react-router-dom'

export default function About() {
	return (
		<div>
			<div className='py-5 mb-5 heade'>
				<div className="container my-5 pt-5 pb-4">
					<h1 className="text-center text-white">About Us</h1>
					<ol class="breadcrumb justify-content-center text-uppercase">
						<li class="breadcrumb-item"><NavLink to="/" className="link">Home</NavLink></li>
						<li class="breadcrumb-item active" aria-current="page">About</li>
					</ol>
				</div>
			</div>
			About
		</div>
	)
}
