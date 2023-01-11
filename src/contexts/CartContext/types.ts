import { iSearch } from "../../components/InputSearch";
import { iProducts } from "../UserContext/types";

export interface iCartContext {
  showModal: boolean;
  currentSale: iProducts[];
  filtered: iProducts[];
  inputDrop: boolean;
  setCurrentSale:React.Dispatch<React.SetStateAction<iProducts[]>>;
  handleClick: (currentId: string) => void;
  openCart: () => void;
  removeFromCart: (currentId: string) => void;
  dropInput: () => void;
  submitFilter: (data: iSearch) => void;
  revomeFiltered: () => void
}

export interface iDefaultProviderProps {
    children: React.ReactNode;
}