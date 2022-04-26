import { useCallback, useState } from "react";
import { FiChevronDown, FiHome, FiPercent, FiShoppingBag, FiUser } from "react-icons/fi";
import { FloatingBox } from "./FloatingBox";
import { Container } from "./styles";

export function Menu(){

    const [openOption, setOpenOption] = useState(false);

    const toggleOption = useCallback(() => {
        setOpenOption(!openOption);
    }, [openOption]);

    return(
        <Container>
            <section>
                <span>Entregar em</span>
                <div>
                    <FiHome size={18}/>
                    <h4>Rua Mutum, 149</h4>
                    <FiChevronDown size={16}/>
                </div>
            </section>
            <aside>
                <div>
                    <button type="button">
                        <FiPercent size={25}/>
                        <h5>Promoções</h5>
                    </button>
                </div>
                <div>
                    <button type="button">
                        <FiUser size={25}/>
                        <h5>Perfil</h5>
                    </button>
                </div>
                <div>
                    <button type="button" onClick={toggleOption}>
                        <FiShoppingBag size={25}/>
                        <h5>Sacola</h5>
                    </button>
                    <FloatingBox />
                </div>
            </aside>
        </Container>
    );
}