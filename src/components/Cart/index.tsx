import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { StyledText, StyledTitle } from "../../styles/typography";
import { CartCard } from "../CartCard";
import { TotalCart } from "../TotalCart";
import { StyledCart, StyledFeedBack } from "./style";

export const Cart = () => {
  const { currentSale } = useContext(CartContext);
  return (
    <StyledCart>
      {currentSale.map((prod) => (
        <CartCard key={prod.id} prod={prod} />
      ))}
      {currentSale.length>0 ? <TotalCart /> : (
        <StyledFeedBack>
          <StyledTitle tag="h2" color="grey0" lineHeight="150%" className="" heading="3">Sua sacola está vazia</StyledTitle>
          <StyledText tag="span" id="id" color="--grey3" lineHeight="133%" className="" body="2">Adicione itens</StyledText>
        </StyledFeedBack>
      ) }      
    </StyledCart>
  );
};
