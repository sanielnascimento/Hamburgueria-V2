import { useContext } from "react";
import { CartModal } from "../../components/CartModal";
import { FilteredList } from "../../components/FilteredList";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductsList";
import { CartContext } from "../../contexts/CartContext";
import { UserContext } from "../../contexts/UserContext";
import { StyledTitle } from "../../styles/typography";
import { StyledHome } from "./style";

export const Home = () => {
  const {filtered, showModal } = useContext(CartContext);
  const { loading } = useContext(UserContext);
  return (
    <StyledHome>
      <Header />
      {loading && (
        <StyledTitle
          tag="h2"
          heading="2"
          color="--info"
          lineHeight="150%"
          className=""
        >
          Carregando...
        </StyledTitle>
      )}
      {filtered.length > 0 && <FilteredList/>}
      <ProductList />
      {showModal && <CartModal />}
    </StyledHome>
  );
};
