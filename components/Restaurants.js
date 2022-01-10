import React, { useState } from "react";
import CardRestaurants from "./CardRestaurants";

const Restaurants = ({restaurants}) => {
    
    
    //const { id, name, description, imagen, categories } = restaurants;
 //console.log(restaurants[1].categories[0].name);
//  console.log(restaurants)
    return (
			<div>
				<div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
					<div className="w-full rounded-xl shadow-md">
						<div className=""></div>
						<div className="grid grid-cols-3 w-full gap-4">
							{restaurants.map((restaurant) => (
								<CardRestaurants
									key={restaurants.id}
									restaurant={restaurant}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		);
}

export default Restaurants
