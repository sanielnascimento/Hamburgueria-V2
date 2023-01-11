import styled, { css } from "styled-components";
import { TitleBase } from "./components/TitleBase";
import { TextBase } from "./components/TextBase";

export const StyledTitle = styled(TitleBase)`
  font-weight: var(--fweight-b);
  line-height: ${({ lineHeight }) => lineHeight};
  color: var(${({ color }) => (color ? color : "--grey6")});
  ${({ heading }) => {
    switch (heading) {
      case "1":
        return css`
          font-size: var(--fsize1);
        `;
      case "2":
        return css`
          font-size: var(--fsize2);
        `;
      case "3":
        return css`
          font-size: var(--fsize3);
        `;
      default:
        return css`
          font-size: var(--fsize1);
        `;
    }
  }}
`;

export const StyledText = styled(TextBase)`
  line-height: ${({ lineHeight }) => lineHeight};
  color: var(${({ color }) => (color ? color : "--grey6")});
  ${({ body }) => {
    switch (body) {
      case "1":
        return css`
          font-size: var(--fsize4);
          font-weight: var(--fweight-r);
        `;
      case "2":
        return css`
          font-size: var(--fsize5);
          font-weight: var(--fweight-r);
        `;
      case "3":
        return css`
          font-size: var(--fsize5);
          font-weight: var(--fweight-s);
        `;
      case "4":
        return css`
          font-size: var(--fsize6);
          font-weight: var(--fweight-r);
        `;
      default:
        return css`
          font-size: var(--fsize4);
          font-weight: var(--fweight-r);
        `;
    }
  }}
`;