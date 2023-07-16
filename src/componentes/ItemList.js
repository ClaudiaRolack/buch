import { Item } from "./Item"

export const ItemList = ({productos}) => {

    return (
        <div className="lista">
            {productos.map(function (item, id) {
                return (<p>{item}</p>)
            })}
        </div>

    )
}