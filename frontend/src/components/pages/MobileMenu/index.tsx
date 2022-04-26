import { FiHome, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { Container } from "./styles";

export function MobileMenu(){
    return(
        <>
            {window.innerWidth >= 960 ? (
                <></>
            ) : (
                <Container>
                    <div>
                        <a href=" ">
                            <FiHome size={20} color="#3e3e3e"/>
                            <span>Início</span>
                        </a>
                        <a href=" ">
                            <FiSearch size={20} color="#3e3e3e"/>
                            <span>Buscar</span>
                        </a>
                        <a href=" ">
                            <FiShoppingCart size={20} color="#3e3e3e"/>
                            <span>Pedidos</span>
                        </a>
                        <a href=" ">
                            <FiUser size={20} color="#3e3e3e"/>
                            <span>Perfil</span>
                        </a>
                    </div>
                </Container>
            )}
        </>
    );
}