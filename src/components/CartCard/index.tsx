import React from "react";
import { StyledText, StyledTitle } from "../../styles/typography";
import { StyledCardHeader, StyledCartCard, StyledInfoBox } from "./style";
import { FaTrash } from "react-icons/fa";
import {iProductProp} from "../Product"

export const CartCard = ({ prod }: iProductProp) => {
  const { name, img, price } = prod;
  return (
    <StyledCartCard>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <StyledInfoBox>
        <StyledCardHeader>
          <StyledTitle className="" color="" lineHeight="" tag="h3" heading="3">
            {name}
          </StyledTitle>
          <button type="button"><FaTrash/></button>
        </StyledCardHeader>
        <StyledText className="" lineHeight="" id="" tag="p" body="3" color="--primary">{`R$ ${price.toFixed(2)}`}</StyledText>
      </StyledInfoBox>
    </StyledCartCard>
  );
};
