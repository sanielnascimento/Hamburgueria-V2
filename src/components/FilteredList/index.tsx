import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Container } from "../../styles/components/Container";
import { Product } from "../Product";
import { StyledProcuctList } from "./style";

export const FilteredList = () => {
  const {filtered} = useContext(CartContext);
  return (
    <StyledProcuctList>
      <Container>
        {filtered.map((prod) => (
          <Product key={prod.id} prod={prod} />
        ))}
      </Container>
    </StyledProcuctList>
  );
};
