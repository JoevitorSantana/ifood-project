import { Carousel } from "../../components/pages/Carousel";
import Categories from "../../components/pages/Categories";
import { Header } from "../../components/pages/Header";
import { MobileMenu } from "../../components/pages/MobileMenu";
import { Famous } from "../../components/pages/Restaurant/Famous";
import { SuggestedRestaurants } from "../../components/pages/SuggestedRestaurants";
import { Voucher } from "../../components/pages/Voucher/Voucher";
import { Container } from "./styles";


export function Restaurants(){
    return(
        <>
            <Container>
                <Header isFixed/>
                <Voucher />
                <Categories /> 
                <Carousel />               
                <Famous />
                <SuggestedRestaurants />
                <MobileMenu />
            </Container>
        </>
    );
}