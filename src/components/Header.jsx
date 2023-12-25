import React from 'react'

export default function Header() {
	return (
		<div className='py-5 mb-5 heade'>
			<div className="container my-5 py-5">
				<div className="row align-items-center g-5">
					<div className="col-lg-6 text-center text-lg-start">
						<h1 className="text-white">Enjoy Our Delicious Meal</h1>
						<p className="mb-4 pb-2 text-white">
							Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
						</p>
						<a href="#!" className="btn btn-primary py-3 px-5">BOOK A TABLE</a>
					</div>
					<div className="col-lg-6">
						<img src={require('../images/hero.png')} alt="" className="img-fluid animation" />
					</div>
				</div>
			</div>
		</div>
	)
}
