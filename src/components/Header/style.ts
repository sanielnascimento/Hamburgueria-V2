import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 2%;
  width: 100%;
  height: 80px;
  background-color: var(--grey1);
  margin-bottom: 2rem;

  >div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .InteractiveBox {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .CartButton {
    position: relative;
    span {
      position: absolute;
      top: -16px;
      right: -12px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 4px;
      height: 24px;
      pointer-events: none;

      font-weight: 900;
      font-size: 14px;
      line-height: 0px;
      color: var(--white);

      background: var(--primary);
      border-radius: 7px;
    }
  }

  .InteractiveButton {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: var(--grey5);
    background: transparent;
    border: none;
    cursor: pointer;
    :hover{
      color: var(--grey6);
    }
  }

  .Search{
    display: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: var(--grey5);
    background: transparent;
    border: none;
    cursor: pointer;
    :hover{
      color: var(--grey6);
    }
    @media (max-width: 720px) {
      display: flex;      
    }
  }

  @media (max-width: 720px) {
    padding: 1rem 2%;
    margin-bottom: 1rem;
    >div {
      justify-content: space-between;
    }
    .InteractiveBox{
      gap: 12px;
    }
  }
`;
