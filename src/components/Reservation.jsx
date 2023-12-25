import React from 'react'

function Reservation() {
	return (
		<div className="container-xxl py-5 ps-0 reservation">
			<div className="row">
				<div className="col-md-6">
					<div className="video">
						<button type="button" class="btn-play" data-bs-toggle="modal" data-bs-target="#exampleModal">
							<span></span>
						</button>
						<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div class="modal-dialog">
								<div class="modal-content">
									<div class="modal-header">
										<h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
										<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
									</div>
									<div class="modal-body">
										...
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
										<button type="button" class="btn btn-primary">Save changes</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-6"></div>
			</div>
		</div>
	)
}

export default Reservation