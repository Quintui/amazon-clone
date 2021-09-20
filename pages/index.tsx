import Head from "next/head";
import React, { FC } from "react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";

export type ProductType = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
};

interface Props {
	products: ProductType[];
}

const Home: FC<Props> = ({ products }) => {
	return (
		<div className="bg-gray-100">
			<Head>
				<title>Amazon Clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className="mx-auto max-w-screen-2xl">
				<Banner />
				<div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
					{products.slice(0, 4).map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
					<div className="md:col-span-full flex justify-center">
						<img src="https://links.papareact.com/dyz" alt="" />
					</div>
					<div className="md:col-span-2">
						{products.slice(4, 5).map((product) => (
							<ProductCard key={product.id} {...product} />
						))}
					</div>
					{products.slice(5, products?.length).map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
			</main>
		</div>
	);
};
export default Home;

export async function getServerSideProps() {
	const products: ProductType[] = await fetch("https://fakestoreapi.com/products/").then((res) =>
		res.json(),
	);

	return {
		props: {
			products,
		},
	};
}
