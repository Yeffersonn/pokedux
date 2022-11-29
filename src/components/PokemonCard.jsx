import { Card } from "antd";
import { Meta } from "antd/es/list/Item";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlice";
import { StarButton } from "./StarButton";


const PokemonCard = ({ name, image, types, id, favorite }) => {

    const typesString = types.map(elem => elem.type.name).join(', ')
    const dispatch = useDispatch();

    const handleOnFavorite = () => {
        dispatch(setFavorite({pokemonId: id}))
    }

    return (
        <Card
            style={{ width: 250 }}
            title={name}
            cover={<img
                src={image}
                alt={name} />}
            extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite}/>}
        >
            <Meta description={typesString} />
        </Card>
    )
}

export { PokemonCard }