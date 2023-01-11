import styled, { css } from "styled-components";
import searchIcon from "../../../assets/searchIcon.png";
import { iButtonProps } from "./type";

export const StyledButton = styled.button<iButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  transition: 0.3s ease;
  cursor: pointer;
  border-radius: 8px;

  font-weight: 600;
  ${({ classButton }) => {
    switch (classButton) {
      case "medium":
        return css`
          padding: 0px 20px;
          height: 40px;
          font-size: 14px;
        `;
      case "small":
        return css`
          width: 53px;
          padding: 0px 20px;
          height: 40px;
        `;
      case "default":
        return css`
          width: 100%;
          height: 60px;
          font-size: 16px;
        `;
    }
  }}
  ${({ color }) => {
    switch (color) {
      case "grey0":
        return css`
          background: var(--grey0);
          color: var(--grey3);
          border: 2px solid var(--grey0);

          &:hover {
            background: var(--grey3);
            color: var(--grey0);
            border: 2px solid var(--grey3);
          }
        `;
      case "grey1":
        return css`
          background: var(--grey1);
          color: var(--grey3);
          border: 2px solid var(--grey1);
          &:hover {
            background: var(--grey3);
            color: var(--grey1);
            border: 2px solid var(--grey3);
          }
        `;
      case "grey2":
        return css`
          background: var(--grey2);
          color: var(--white);
          border: 2px solid var(--grey2);
          &:hover {
            background: var(--grey0);
            color: var(--grey2);
            border: 2px solid var(--grey0);
          }
        `;
      case "small":
        return css`
          background: var(--primary) url(${searchIcon}) center no-repeat;
          color: var(--white);
          border: 2px solid var(--primary);
          &:hover {
            background: var(--primary-5) url(${searchIcon}) center no-repeat;
            border: 2px solid var(--primary-5);
          }
        `;
      case "default":
        return css`
          background: var(--primary);
          color: var(--white);
          border: 2px solid var(--primary);
          &:hover {
            background: var(--primary-5);
            border: 2px solid var(--primary-5);
          }
        `;
    }
  }}
`;
