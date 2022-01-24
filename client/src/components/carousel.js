import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import carouselimg1 from "../assets/carousel-img1.jpg";
import carouselimg2 from "../assets/carousel-img2.jpg";
import carouselimg3 from "../assets/carousel-img3.jpg";

export default function CarouselDynamic() {
return (
	<>
	<h1 class="gallery">Gallery</h1>
	<div class = "carousel" style={{ display: 'block', width: 427}}>
	{/* <h4>React-Bootstrap Carousel Component</h4> */}
	<Carousel nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}>
		<Carousel.Item interval={5000}>
		<img class="d-block w-100" src={carouselimg1} alt="One"/>
		{/* <Carousel.Caption>
			<h3>Label for first slide</h3>
			<p>Sample Text for Image One</p>
		</Carousel.Caption> */}
		</Carousel.Item>
		<Carousel.Item interval={5000}>
		<img class="d-block w-100" src={carouselimg2} alt="Two"/>
		{/* <Carousel.Caption>
			<h3>Label for second slide</h3>
			<p>Sample Text for Image Two</p>
		</Carousel.Caption> */}
		</Carousel.Item>
		<Carousel.Item interval={5000}>
		<img class="d-block w-100" src={carouselimg3} alt="Three"/>
		{/* <Carousel.Caption>
			<h3>Label for first slide</h3>
			<p>Sample Text for Image One</p>
		</Carousel.Caption> */}
		</Carousel.Item>
	</Carousel>
	</div>
	 </>
	
);
}