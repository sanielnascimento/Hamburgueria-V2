import { forwardRef } from "react";
import { StyledText } from "../../styles/typography";
import { StyledInput } from "./style";
import { iInputProps } from "./types";

export const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ id, type, placeholder, children, ...rest }, ref) => {
    return (
      <StyledInput>
        <StyledText className="" tag="label" body="2" color="--grey5" lineHeight="" id={id}>
          {children}
        </StyledText>
        <input type={type} placeholder={placeholder} ref={ref} {...rest} id={id}/>
      </StyledInput>
    );
  }
);
