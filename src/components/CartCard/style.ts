import styled from "styled-components";

export const StyledCartCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  gap: 10px;

  figure {
    width: 80px;
    height: 80px;
    background: #e0e0e0;
    border-radius: 5px;

    img{
        max-width: 100%;
    }
  }
`;

export const StyledInfoBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
flex: 1;
`
export const StyledCardHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

button{
  font-size: 16px;
  color: var(--grey3);
  cursor: pointer;
  border: none;
  background: transparent;
}
`
