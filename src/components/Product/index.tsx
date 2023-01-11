import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { StyledButton } from "../../styles/components/Button/style";
import { StyledText, StyledTitle } from "../../styles/typography";
import { StyledProduct } from "./style";
import {iProducts} from "../../contexts/UserContext/types"

export interface iProductProp {
  prod: iProducts
}

export const Product = ({ prod }: iProductProp) => {
  const { handleClick } = useContext(CartContext);
  const { name, img, price, category, id } = prod;
  return (
    <StyledProduct>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div>
        <StyledTitle
          tag="h2"
          className=""
          lineHeight=""
          heading="3"
          color="--grey6"
        >
          {name}
        </StyledTitle>
        <StyledText tag="p" className="" color="" id="" lineHeight="" body="1">
          {category}
        </StyledText>
        <StyledText
          tag="span"
          className=""
          id=""
          lineHeight=""
          body="3"
          color="--primary"
        >
          {`R$ ${price.toFixed(2)}`}
        </StyledText>
        <StyledButton
          color="small"        
          type="button"
          onClick={() => handleClick(id)}
          classButton="medium"
        >
          comprar
        </StyledButton>
      </div>
    </StyledProduct>
  );
};
