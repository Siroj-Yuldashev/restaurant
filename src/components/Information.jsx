import React from 'react'
import { useState } from 'react'
import CountUp from 'react-countup'
import ReactVisibilitySensor from 'react-visibility-sensor'

export default function Information() {

	const [onScroll, setonScroll] = useState(false);

	return (
		<div className="container-xxl py-5 info">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="row">
							<div className="col-6 px-2" data-aos="zoom-in" data-aos-delay="100"><img src={require("../images/about-1.jpg")} alt="" className="img-fluid" /></div>
							<div className="col-6 px-2" data-aos="zoom-in" data-aos-delay="300"><img src={require("../images/about-2.jpg")} alt="" className="img-fluid w-75 img-low" /></div>
							<div className="col-6 text-end px-2 mt-3" data-aos="zoom-in" data-aos-delay="500"><img src={require("../images/about-3.jpg")} alt="" className="img-fluid w-75 img-top" /></div>
							<div className="col-6 px-2 mt-3" data-aos="zoom-in" data-aos-delay="700"><img src={require("../images/about-4.jpg")} alt="" className="img-fluid" /></div>
						</div>
					</div>
					<div className="col-lg-6">
						<h5 className="about-title text-primary">About Us</h5>
						<h1 className="mb-4">Welcome to <i className="fas fa-utensils text-primary"></i> Restoran</h1>
						<p className="mb-4">
						Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
						</p>
						<p className="mb-4">
						Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
						</p>
						<ReactVisibilitySensor>
							{({isVisible})=>
								<div className="row mb-4">
									<div className="col-sm-6">
										<div className="d-flex align-items-center px-3 border-start border-5 border-primary">
											<h1 className="text-primary display-5 mb-0">
													{(isVisible && !onScroll)?<CountUp className="countUp" duration={2} useEasing={false} start={0} end={15} onEnd={() => setonScroll(true)}/>:15}
											</h1>
											<div className="ps-4">
												<p className="mb-0">Years of</p>
												<h6 className="mb-0">EXPERIENCE</h6>
											</div>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="d-flex align-items-center px-3 border-start border-5 border-primary">
											<h1 className="text-primary display-5 mb-0">
												{(isVisible && !onScroll)?<CountUp className="countUp" duration={2} useEasing={false} start={0} end={50} onEnd={() => setonScroll(true)}/>:50}
											</h1>
											<div className="ps-4">
												<p className="mb-0">Popular</p>
												<h6 className="mb-0">MASTER CHEFS</h6>
											</div>
										</div>
									</div>
								</div>
							}
						</ReactVisibilitySensor>
						<button className="btn btn-primary py-3 px-5 mt-2">Read More</button>
					</div>
				</div>
			</div>
		</div>
	)
}
