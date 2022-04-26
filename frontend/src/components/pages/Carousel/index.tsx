import { useEffect, useState } from "react";
import api from "../../../service/api";
import { CarouselPlaceHolde } from "./CarouselPlaceholder";
import { Container } from "./styles";

interface CarouselItem{
    image_url: string;
    alt: string;
}

export function Carousel(){

    const [ carouselItems, setCarouselItems ] = useState<CarouselItem[]>([]);

    useEffect(() => {
        async function loadCarousel(){
            const response = await api.get('carousel');
            setCarouselItems(response.data);
        }

        loadCarousel();
    }, []);

    return(
        <Container id="items-wrapper">
            <div id="items">
                {carouselItems.length === 0 ? (
                    <CarouselPlaceHolde repeatCount={4}/>
                ) : (
                    carouselItems.map(item => (
                        <div className="item" key={item.alt}>
                            <figure>
                                <img src={item.image_url} alt={item.alt} />
                            </figure>
                        </div>
                    ))
                )}
            </div>
        </Container>
    );
}