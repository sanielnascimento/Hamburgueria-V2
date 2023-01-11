import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartCard } from "../CartCard";
import { TotalCart } from "../TotalCart";
import { StyledCart } from "./style";

export const Cart = () => {
  const { currentSale } = useContext(CartContext);
  return (
    <StyledCart>
      {currentSale.map((prod) => (
        <CartCard key={prod.id} prod={prod} />
      ))}
      <TotalCart />
    </StyledCart>
  );
};
