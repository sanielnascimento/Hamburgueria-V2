import { createContext, useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { iCartContext, iDefaultProviderProps } from "./types";
import { iProducts } from "../UserContext/types";
import { iSearch } from "../../components/InputSearch";

export const CartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iDefaultProviderProps) => {
  const { products } = useContext(UserContext);
  const [inputDrop, setInputDrop] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentSale, setCurrentSale] = useState<iProducts[]>([]);
  const [filtered, setFiltered] = useState<iProducts[]>([]);

  const openCart = () => {
    setShowModal(!showModal);
  };

  const dropInput = () => {
    setInputDrop(!inputDrop);
  };

  const removeFromCart = (currentId:string) => {
    const newList = currentSale.filter((elt) => elt.id !== currentId);
    setCurrentSale(newList);
  };

  const handleClick = (currentId: string) => {
    const saleProduct = products.find((elt) => elt.id === currentId);
    if (!currentSale.includes(saleProduct as iProducts)) {
      setCurrentSale([saleProduct as iProducts, ...currentSale]);
    } else {
    }
  };

  const submitFilter = (data: iSearch) => {
    const newArray = products.filter(
      (product) =>
        product.category.toLowerCase().includes(data.text.toLowerCase()) ||
        product.name.toLowerCase().includes(data.text.toLowerCase())
    );
    setFiltered(newArray);
    console.log(filtered);
    
  };

  const revomeFiltered = () => {
    setFiltered([]);
  };

  return (
    <CartContext.Provider
      value={{ currentSale, setCurrentSale, showModal, openCart, handleClick, dropInput, removeFromCart, inputDrop, filtered, submitFilter, revomeFiltered }}
    >
      {children}
    </CartContext.Provider>
  );
};
