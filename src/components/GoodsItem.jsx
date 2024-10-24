import Price from "./Price";
import { ShopContext } from "../context";
import { useContext } from "react";

export function GoodsItem(props) {
  const {
    id,
    name,
    description,
    price,
    images: { full_background },
  } = props;

  const { addToBasket } = useContext(ShopContext);

  const displayPrice =
    price === 0 ? Math.floor(Math.random() * 1000) + 1 : price;
  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToBasket({
              id,
              name,
              displayPrice,
            })
          }
        >
          Купить
        </button>
        <Price price={displayPrice} />
        {/* <span className="right" style={{ fontSize: "1.8rem" }}>
          {displayPrice} руб.
        </span> */}
      </div>
    </div>
  );
}
