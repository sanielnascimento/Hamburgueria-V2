import styled from "styled-components";

export const StyledInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;

  label {
    display: none;
    position: absolute;
    z-index: 99;
    top: -10px;
    left: 15px;
    background: var(--white);
    padding: 0 4px;
  }

  input {
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;
    width: 100%;
    height: 60px;

    background: var(--grey0);
    border: 2px solid var(--grey0);
    outline: none;
    border-radius: 8px;

    font-size: var(--fsize4);
    font-weight: var(--fweight-r);
    color: var(--grey6);

    ::placeholder {
      color: var(--grey5);
    }
  }

  :hover{
    label {
      display: flex;
    }
    input {
      background: var(--white);
      border: 2px solid var(--grey3);
      z-index: 98;

            ::placeholder{
        color: var(--white)
      }
    }
  }

  :focus-within {
    label {
      display: flex;
    }
    input {
      background: var(--white);
      border: 2px solid var(--grey3);
      z-index: 98;

      ::placeholder{
        color: var(--white)
      }
    }
  }
`;
