import styled from "styled-components";

export const StyledProduct = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  transition: 0.3s ease-in;

  width: 23.5%;
  height: 346px;

  background: var(--white);
  border: 2px solid var(--grey1);
  border-radius: 5px;

  @media (max-width: 1000px) {
    width: 32%;
  }

  @media (max-width: 700px) {
    width: 250px;
    min-width: 250px;
  }

  button {
    background: var(--grey2);
    border: 2px solid var(--grey2);
  }

  figure {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 150px;
    background: var(--grey1);
    border-radius: 4.5px 4.5px 0 0;
  }

  figure > img {
    max-width: 100%;
    pointer-events: none;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    gap: 14px;
    width: 300px;
    height: 196px;
  }

  &:hover {
    border: 2px solid var(--primary);
    button {
      background: var(--primary);
      border: 2px solid var(--primary);
    }
  }
`;
