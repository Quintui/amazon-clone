import React from "react";
import Image from "next/image";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
export const Header = () => {
	return (
		<header>
			{/* Top Header */}
			<div className=" flex items-center bg-amazon_blue px-4 py-2 flex-grow">
				{/* Left */}
				<div className="flex items-center mt-2 flex-grow sm:flex-grow-0">
					<Image
						src={"https://links.papareact.com/f90"}
						width={130}
						height={40}
						objectFit={"contain"}
						className="cursor-pointer"
					/>
				</div>

				{/* Middle search */}
				<div className=" hidden h-10 sm:flex sm:flex-grow  bg-yellow-400  cursor-pointer items-center hover:bg-yellow-500 transition rounded-sm mx-6">
					<input type="text" className="p-2 h-full flex-grow focus:outline-none " />
					<SearchIcon className="h-12 p-3 " />
				</div>

				{/* Right */}

				<div className="flex items-center space-x-6 text-sm">
					<div className="text-white cursor-pointer link middleHidden ">
						<p>Hello, Dear User!</p>
						<p className="font-bold">Account & Lists</p>
					</div>
					<div className="text-white cursor-pointer link middleHidden ">
						<p>Returns</p>
						<p className="font-bold"> & Orders</p>
					</div>
					<div className="text-white flex items-center cursor-pointer relative ">
						<ShoppingCartIcon className="h-10" />

						<span className="flex items-center justify-center absolute right-0 md:right-10 top-0  bg-yellow-400 h-4 w-4 rounded-full text-black font-bold">
							0
						</span>
						<p className=" hidden md:flex font-bold  "> Basket</p>
					</div>
				</div>
			</div>
			{/* Bottom header */}
			<div className="bg-amazon_blue-lights p-2 px-4 flex items-center text-white text-sm space-x-4 ">
				<div className="flex items-center ">
					<MenuIcon className="h-6 mr-1" />
					<p className="font-bold">All</p>
				</div>
				<p className="link  middleHidden">Today's Deals</p>
				<p className="link  middleHidden">Customer Service</p>
				<p className="link  middleHidden">Registry</p>
				<p className="link  middleHidden">Gift Cards</p>
				<p className="link middleHidden">Sell</p>
			</div>
		</header>
	);
};
