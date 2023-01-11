import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Container } from "../../styles/components/Container";
import { Product } from "../Product";
import { StyledProcuctList } from "./style";

export const ProductList = () => {
  const {products} = useContext(UserContext);
  return (
    <StyledProcuctList>
      <Container>
        {products.length > 0 && products.map((prod) => (
          <Product key={prod.id} prod={prod} />
        ))}
      </Container>
    </StyledProcuctList>
  );
};
