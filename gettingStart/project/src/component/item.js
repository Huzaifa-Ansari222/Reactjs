import './item.css'

function Item(props){
    const productItem=props.product;

    return(
    <p className="item">{productItem}</p>
    )
}
export default Item;