import { useContext } from "react"
import { useForm } from "react-hook-form"
import { CartContext } from "../../contexts/CartContext"
import { StyledButton } from "../../styles/components/Button/style"
import { StyledFormSearch } from "./style"

export interface iSearch {
    text: string
}

export const InputSearch = () => {
    const {inputDrop, submitFilter} = useContext(CartContext)
    const {register, handleSubmit} = useForm<iSearch>();      
        return(
        <StyledFormSearch onSubmit={handleSubmit(submitFilter)} topp={inputDrop}>
            <input type="text" placeholder="Pesquisar" {...register('text')}/>
            <StyledButton type="submit" classButton="small" color="small"> </StyledButton>
        </StyledFormSearch>
    )
}