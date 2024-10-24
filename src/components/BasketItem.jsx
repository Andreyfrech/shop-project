export function BasketItem(props) {
  const {
    id,
    name,
    displayPrice,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;
  console.log(id);
  return (
    <li href="#!" className="collection-item">
      {name}{" "}
      <i
        className="material-icons quantity-icon"
        onClick={() => incQuantity(id)}
      >
        add_circle
      </i>{" "}
      x{quantity}{" "}
      <i
        className="material-icons quantity-icon"
        onClick={() => decQuantity(id)}
      >
        remove_circle
      </i>{" "}
      = {displayPrice * quantity}
      <span className="secondary-content" onClick={() => removeFromBasket(id)}>
        <i className="material-icons basket-delete">clear</i>
      </span>
    </li>
  );
}
