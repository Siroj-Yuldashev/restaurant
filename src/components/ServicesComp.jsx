import React from 'react'

export default function ServicesComp() {

	return (
		<div className='container-xxl py-5 service-comp'>
			<div className="container">
				<div className="row">
					<div 		
						className="col-lg-3 col-sm-6" 
						data-aos="fade-up"
						data-aos-delay="100"
					>
						<div className="service-item rounded pt-3">
							<div className="p-4">
								<i className="fas fa-3x fa-user-tie mb-4 text-primary"></i>
								<h5>Master Chefs</h5>
								<p>
								Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
								</p>
							</div>
						</div>
					</div>
					<div 
						className="col-lg-3 col-sm-6"
						data-aos="fade-up"
						data-aos-delay="300"
					>
						<div className="service-item rounded pt-3">
							<div className="p-4">
							<i className="fas fa-3x fa-utensils mb-4 text-primary"></i>
								<h5>Quality Food</h5>
								<p>
								Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
								</p>
							</div>
						</div>
					</div>
					<div 
						className="col-lg-3 col-sm-6"
						data-aos="fade-up"
						data-aos-delay="500"
					>
						<div className="service-item rounded pt-3">
							<div className="p-4">
								<i className="fas fa-3x fa-cart-plus mb-4 text-primary"></i>
								<h5>Online Order</h5>
								<p>
								Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
								</p>
							</div>
						</div>
					</div>
					<div 
						className="col-lg-3 col-sm-6"
						data-aos="fade-up"
						data-aos-delay="700"
					>
						<div className="service-item rounded pt-3">
							<div className="p-4">
								<i className="fas fa-3x fa-headset mb-4 text-primary"></i>
								<h5>24/7 Service</h5>
								<p>
								Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}
