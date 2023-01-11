export interface iUserContext {
  products: iProducts[];
  loading: boolean;
  submitRegister: (data: any) => Promise<void>;
  submitLogin: (data: any) => Promise<void>;
  user: iUser | null;
  toRegister: () => void;
  loggout: () => void
}

export interface iDefaultProviderProps {
  children: React.ReactNode;
}

export interface iProducts {
  name: string;
  price: number;
  img: string;
  category: string;
  id: string;
}

export interface iUser {
  userToken: string;
  user: string
}
