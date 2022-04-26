import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import { FaStar } from 'react-icons/fa'

interface IRestaurantProps{
    restaurantData?:{
        id: string;
        restaurantName: string;
        avatar_url: string;
        category: string;
        distance: number;
        start_time: number;
        end_time: number;
        rate: number;
    };
    isFamousContainer?: boolean;
    loading?: boolean;
}


export function Restaurant({restaurantData, isFamousContainer, loading}:IRestaurantProps){    

    const avatar_url = restaurantData?.avatar_url;
    const restaurantName = restaurantData?.restaurantName;
    const category = restaurantData?.category;
    const distance = restaurantData?.distance;
    const start_time = restaurantData?.start_time;
    const end_time = restaurantData?.end_time;
    const rate = restaurantData?.rate;

    return(
        <>
            {loading ? (
                <Container isFamousContainer={isFamousContainer}>
                    <div>
                        <figure>
                            <Skeleton width={86} height={86}/>
                        </figure>
                        <aside />
                        <main>
                            <h5>
                                <Skeleton width={90} height={20}/>
                            </h5>
                            <span>
                                <Skeleton width={175} height={20}/>
                            </span>
                            <span>
                                <Skeleton width={70} height={20}/>
                            </span>
                        </main>
                    </div>
                </Container>
            ) : (
                <Container isFamousContainer={isFamousContainer}>
                    <Link to={''} style={{textDecoration: 'none'}} >
                        <div>
                            <figure>
                                <img src={avatar_url} alt={restaurantName} />
                            </figure>
                            <aside />
                            <main>
                                <h5>{restaurantName}</h5>
                                <span>
                                    <FaStar fill="#e7a74e" size={12}/>
                                    <p className="starred">{rate}</p>
                                    &nbsp; • {category} • {distance} km
                                </span>
                                <span>
                                    {start_time}-{end_time} min
                                </span>
                            </main>
                        </div>
                    </Link>
                </Container>
            )}
        </>
    )
}