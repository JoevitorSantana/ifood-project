import { useEffect, useState } from "react";
import api from "../../../service/api";
import { Restaurant } from "../Restaurant";
import RestaurantPlaceHolder from "../Restaurant/RestaurantPlaceHolder";
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

export function SuggestedRestaurants(){

    const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

    useEffect(() => {
        async function loadRestaurants() {
            const response = await api.get('cities/list?city_id=2225');

            setRestaurants(response.data);            
        }

        loadRestaurants();
    }, []);

    return(
        <Container>
            <div>
                <h4>Restaurantes e mercados</h4>
                <ul>
                    {restaurants.length === 0 ? (
                        <RestaurantPlaceHolder repeatCount={9} isFamousContainer={false}/>
                    ) : (
                        restaurants.map(restaurant => (
                            <li key={restaurant.restaurantName}>
                                <Restaurant restaurantData={restaurant}/>
                            </li>
                        ))
                    )}
                </ul>
                <button type="button">Ver mais restaurante e mercados</button>
            </div>
        </Container>
    );
}