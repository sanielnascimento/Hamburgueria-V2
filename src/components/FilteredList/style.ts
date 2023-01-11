import styled from "styled-components"

export const StyledProcuctList = styled.ul`
  padding: 2rem 2%;
  margin-bottom: 2rem;
  border: 2px solid var(--grey3);
  
  div{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    height: auto;
    gap: 20px 2%;

    @media (max-width: 700px) {
      width: 100%;
      flex-wrap: nowrap;
      overflow-x: auto;
    }
  }
`
