import React, { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";

const myLoader = ({ src }) => {
	return `http://localhost:1337${src}`;
};

const CardRestaurants = ({ restaurant }) => {

    const { id, name, description, imagen, categories } = restaurant;
    const [showModal, setshowModal] = useState(false);
    // console.log(restaurant.categories, "card");
	return (
		<div key={restaurant.id} className="p-10 space-y-6">
			<Image
				loader={myLoader}
				src={imagen.url}
				alt={restaurant.name}
				width={500}
				height={500}
				objectFit="cover"
				//unoptimized="true"
			/>
			<div className="uppercase tracking-wide text-2xl text-pink-500	 font-semibold">
				{restaurant.name}
			</div>

			<p className="mt-2 text-gray-500">{categories[0].name}</p>
			<button
				className="bg-pink-500 hover:bg-pink-900 text-white font-bold py-2 px-4 rounded object-bottom"
				type="button"
				onClick={() => setshowModal(true)}
				value={restaurant.id}
			>
				Leer mas
			</button>
			<Modal
				name={restaurant.name}
				address={restaurant.address}
				description={restaurant.description}
				showModal={showModal}
				setshowModal={setshowModal}
			/>
		</div>
	);
};

export default CardRestaurants
