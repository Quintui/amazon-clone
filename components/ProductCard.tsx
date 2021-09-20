import { FC, useState } from "react";
import { ProductType } from "../pages";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

const MIN_RATING = 1;
const MAX_RATING = 5;

export const ProductCard: FC<ProductType> = ({ category, description, image, price, title }) => {
	const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING));
	const [hasPrime] = useState<boolean>(Math.random() < 0.5);
	return (
		<div className="bg-white mb-5 flex flex-col p-10 m-5 relative justify-between z-30">
			<p className=" italic text-gray-400 absolute right-2 top-2">{category}</p>

			<Image src={image} width={200} height={200} objectFit={"contain"} />
			<h4 className="my-2 font-semibold">{title}</h4>

			{/* For randomize rating */}
			<div className="flex text-yellow-400 my-2">
				{Array(rating)
					.fill("")
					.map((_, i) => (
						<StarIcon key={i} className="h-6" />
					))}
			</div>
			<p className="text-sm line-clamp-2">{description}</p>
			<p className="mt-2 mb-5 text-md font-semibold">{price} $</p>
			{hasPrime && (
				<div className="flex items-center space-x-2 -mt-5 ">
					<img src="https://links.papareact.com/fdw" alt="" loading="lazy" className="w-12" />
					<p className="text-gray-400 text-sm">FREE Next-day Delivery</p>
				</div>
			)}
			<button className="button">Add to Basket</button>
		</div>
	);
};
