import { useEffect, useState } from "react";
import { Restaurant } from "..";
import api from "../../../../service/api";
import RestaurantPlaceHolder from "../RestaurantPlaceHolder";
import { Container } from "./styles";

interface IRestaurant{
    id: string;
    restaurantName: string;
    avatar_url: string;
    category: string;
    distance: number;
    start_time: number;
    end_time: number;
    rate: number;
}

export function Famous(){

    const [ restaurants, setRestaurants ] = useState<IRestaurant[]>([]);

    useEffect(() => {
        async function loadRestaurants() {
            const response = await api.get('cities/list?city_id=2225');

            setRestaurants(response.data);
        }

        loadRestaurants();
    }, []);

    return (
        <Container className="scroll-box">
            <header>
                <h4>Famosos no iFood</h4>
                <a href=" ">Ver mais</a>                
            </header>
            <div role="list" className="scroll-box__wrapper">
                {restaurants.length === 0 ? (
                    <RestaurantPlaceHolder repeatCount={5} isFamousContainer/>
                ) : (
                    restaurants.map(restaurant => (
                        <Restaurant 
                            key={restaurant.restaurantName}
                            restaurantData={restaurant}
                            isFamousContainer
                        />
                    ))
                )}
            </div>
        </Container>
    )
}