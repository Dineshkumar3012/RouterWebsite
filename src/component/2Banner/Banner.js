import React from 'react'
import Nav from '../0navbar/Nav';
import '../2Banner/Banner.css'

function Banner(){
  return (
    <div>
		<Nav/>
        <section id="banner_container">
				<div class="container">
					<div class="row">
						<div class="col6 col-sm-12 col-md-12">
							<div class="content_sec">
							
								<h1>Welcome to Multi</h1>
								
								<p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi 
								nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse 
								doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
								
								
								<div class="col4 col-sm-12 col-md-12">
									<div class="primaryButton">
										<button><b>Read More</b></button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
    </div>
  )
}

export default Banner;