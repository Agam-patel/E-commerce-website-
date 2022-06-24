import { useNavigate } from "react-router-dom";
import {
    BackgroundImage,
    Body,
    DirecotryItemContainer
} from "./directory-item.styles";
const DirectoryItem = ({ category }) => {
    const { imageUrl, title,route } = category;
    const navigate=useNavigate();
    const onNavigateHandler=()=>{
        return navigate(route);
    }
    return (
        <DirecotryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirecotryItemContainer>
    );
};
export default DirectoryItem;
