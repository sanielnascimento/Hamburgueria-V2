import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 26px 24px;
  gap: 25px;

  width: 500px;
  max-width: 100%;

  background: var(--white);

  border: 2px solid var(--grey0);
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  span{
    align-self: center;
    width: 330px;
    text-align: center;
  }
`;
