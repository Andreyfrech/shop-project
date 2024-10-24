import { ShopContext } from "../context";
import { useContext } from "react";
import { GoodsItem } from "./GoodsItem";

export function GoodsList() {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.lenght) {
    <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} />
      ))}
    </div>
  );
}
