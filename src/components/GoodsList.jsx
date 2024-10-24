import { GoodsItem } from "./GoodsItem";

export function GoodsList(props) {
  const { goods = [], addToBasket = Function.prototype } = props;

  if (!goods.lenght) {
    <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
}
