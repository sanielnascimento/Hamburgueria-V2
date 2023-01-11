import styled from "styled-components";

export const StyledCartModal = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: var(--opacity);
  z-index: 99;
  `;
export const StyledCartModalBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  padding-top: 60px;

  width: 500px;
  max-width: 92%;
  top: 80px;
  
  background: var(--white);
  border-radius: 5px;
`;

export const CartModalHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 13px 22px;
  gap: 10px;
  
  width: 500px;
  max-width: 100%;
  height: 54px;

  background: #27ae60;
  border-radius: 4.5px 4.5px 0px 0px;

  button{
    position: absolute;
    right: 20px;
    font-size: 18px;
    color: var(--primary-5);
    border: none;
    background: transparent;
  }
`;
