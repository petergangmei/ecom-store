import React from "react";
import { store } from "../redux-state/store/Store";
import OurBestSellers from "./OurBestSellers";

const Products = () => {
  return (
    <div className="ourBestSellersMainParent">
      {store.map((item) => {
        if (item.type === "ourBestSellers") {
          return (
            <OurBestSellers
              key={item.id}
              id={item.id}
              title={item.name}
              price={item.price}
              image={item.primaryImage}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default Products;
