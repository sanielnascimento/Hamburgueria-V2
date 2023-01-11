import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { StyledButton } from "../../styles/components/Button/style";
import { StyledText } from "../../styles/typography";
import { StyledTotalCart } from "./style";

export const TotalCart = () => {
  const {currentSale, setCurrentSale,} = useContext(CartContext)
  const total = currentSale.reduce((x, y) => x + y.price, 0);
  return (
    <StyledTotalCart>
      <div>
        <StyledText className="" color="" id="" lineHeight="" tag="p" body="3">Total</StyledText>
        <StyledText className="" color="" id="" lineHeight="" tag="span" body="3">{`R$ ${total.toFixed(2)}`}</StyledText>
      </div>
      <StyledButton type="button" color="grey1" classButton="default" onClick={() => setCurrentSale([])}>
        Remover todos
      </StyledButton>
    </StyledTotalCart>
  );
};
