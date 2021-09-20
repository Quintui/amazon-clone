import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export const Banner = () => {
	return (
		<div className="relative">
			<div className="absolute h-32 w-full bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20 " />
			<Carousel
				autoPlay={true}
				infiniteLoop={true}
				showIndicators={false}
				showStatus={false}
				showThumbs={false}
				interval={5000}>
				<div>
					<img src={"https://links.papareact.com/gi1"} loading="lazy" />
				</div>
				<div>
					<img src={"https://links.papareact.com/6ff"} loading="lazy" />
				</div>
				<div>
					<img src={"https://links.papareact.com/7ma"} loading="lazy" />
				</div>
			</Carousel>
		</div>
	);
};
