import { Container } from "../../styles/components/Container";
import { Logo } from "../../styles/components/Logo/style";
import { InputSearch } from "../InputSearch";
import { StyledHeader } from "./style";
import { FaShoppingCart, FaSignOutAlt, FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { UserContext } from "../../contexts/UserContext";

export const Header = () => {
  const {currentSale, openCart, dropInput, } = useContext(CartContext)
  const {loggout } = useContext(UserContext)
  return (
    <StyledHeader>
      <Container>
        <Logo>
          Burguer<span> Kenzie</span>
        </Logo>
        <div className="InteractiveBox">
          <InputSearch />
          <button type="button" onClick={() => dropInput()} className="Search"><FaSearch/></button>
          <div className="CartButton">
            {currentSale.length > 0 && <span>{currentSale.length}</span> }            
            <button onClick={() => openCart()} className="InteractiveButton">
              <FaShoppingCart />
            </button>
          </div>
          <button onClick={() => loggout()} className="InteractiveButton">
            <FaSignOutAlt />
          </button>
        </div>
      </Container>
    </StyledHeader>
  );
};
