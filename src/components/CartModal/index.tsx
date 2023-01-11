import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { StyledTitle } from "../../styles/typography";
import { Cart } from "../Cart";
import { CartModalHeader, StyledCartModal, StyledCartModalBox } from "./style";

export const CartModal = () => {
  const {openCart} = useContext(CartContext);
  return (
    <StyledCartModal>
      <StyledCartModalBox>
        <CartModalHeader>
          <StyledTitle tag="h3" className="" lineHeight="" heading="3" color="--white">Carrinho de compras:</StyledTitle>
          <button onClick={() => openCart()} type="button">X</button>
        </CartModalHeader>
        <Cart/>
      </StyledCartModalBox>
    </StyledCartModal>
  );
};
