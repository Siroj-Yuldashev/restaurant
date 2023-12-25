import React from 'react'
import FoodsComp from './FoodsComp'

function FoodMenu() {
	return (
		<div className="container-xxl py-5 foodMenu">
			<div className="container">
			<div className="text-center" data-aos="fade-up" data-aos-delay="100">
				<h5 className='text-primary title'>Food Menu</h5>
				<h1 className="mb-5">Most Popular Items</h1>
			</div>
			<div className="menu" data-aos="fade-up" data-aos-delay="100">
			<ul className="nav nav-tabs d-inline-flex justify-content-center mb-5" id="myTab" role="tablist">
				<li className="nav-item" role="presentation">
					<button className="nav-link active p-0 mx-3 d-flex align-items-center me-3 pb-3" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
					<i class="fas fa-coffee text-primary fa-2x"></i>
					<div className="ps-3 text-start tab">
						<small>Popular</small>
						<h6 className="mb-0">Breakfast</h6>
					</div>
					</button>
				</li>
				<li className="nav-item" role="presentation">
					<button className="nav-link p-0 mx-3 d-flex align-items-center me-3 pb-3" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
						<i className="fas fa-hamburger fa-2x text-primary"></i>
						<div className="ps-3 text-start tab">
							<small>Special</small>
							<h6 className="mb-0">Launch</h6>
						</div>
					</button>
				</li>
				<li className="nav-item" role="presentation">
					<button className="nav-link p-0 mx-3 d-flex align-items-center me-3 pb-3" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
						<i className="fas fa-utensils fa-2x text-primary"></i>
						<div className="ps-3 text-start tab">
							<small>Lovely</small>
							<h6 className="mb-0">Dinner</h6>
						</div>
					</button>
				</li>
			</ul>
			<div className="tab-content" id="myTabContent">
				<div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
					<FoodsComp/>
				</div>
				<div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
					<FoodsComp/>
				</div>
				<div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
					<FoodsComp/>
				</div>
			</div>
			</div>
			</div>
		</div>
	)
}

export default FoodMenu