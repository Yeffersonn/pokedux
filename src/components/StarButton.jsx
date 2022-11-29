import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";

const StarButton = ({isFavorite, onClick}) => {

    

    const icon = isFavorite ?  <StarFilled/> : <StarOutlined/>
    return(
        <Button icon={icon}  onClick={onClick} />
    );
}

export {StarButton};