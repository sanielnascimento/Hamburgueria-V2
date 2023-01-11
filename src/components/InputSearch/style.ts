import styled from "styled-components";

export interface iInputSearch {
  topp: boolean;
}

export const StyledFormSearch = styled.form<iInputSearch>`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 365px;
  height: 60px;

  background: var(--white);

  border: 2px solid #e0e0e0;
  border-radius: 8px;

  input {
    position: absolute;
    inset: 0;
    border: none;
    border-radius: 8px;
    z-index: 9;
    align-items: center;
    padding: 1rem;

    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    ::placeholder {
      color: #e0e0e0;
    }
  }

  button {
    position: absolute;
    right: 10px;
    z-index: 10;
  }
  @media (max-width: 720px) {
    position: absolute;
    top: ${({ topp }) => (topp ? "10px" : "-150px")};
    left: 2%;
    width: 96%;
    z-index: 99;
  }
`;
