import { Link } from "react-router-dom";
import { useAxios } from "../../../hooks/useAxios";
import CategoryPlaceHolder from "./CategoryPlaceholder";
import { Container } from "./styles";

interface ICategory{
    id: string;
    categoryName: string;
    image_url: string;
}

export default function Categories(){
    const {data} = useAxios<ICategory[]>('categories');

    if(!data){
        return(
            <Container className="scroll-box">
                <div role='list' className="scroll-box_wrapper">
                    <CategoryPlaceHolder repeatCount={13}/>
                </div>
            </Container>
        );
    }

    return(
        <Container className="scroll-box">
            <div role='list' className="scroll-box_wrapper">
                {data.map(category => (
                    <main role='listitem' key={category.categoryName}>
                        <figure>
                            <Link to={''}>
                                <img src={category.image_url} alt={category.categoryName} />
                            </Link>
                        </figure>
                        <span>{category.categoryName}</span>
                    </main>
                ))}
            </div>
        </Container>
    )
}