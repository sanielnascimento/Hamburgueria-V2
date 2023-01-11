import styled from "styled-components";

export const StyledTotalCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 10px 0 10px;
  gap: 16px;
  width: 100%;
  height: 122px;
  border-top: 2px solid var(--grey020);  

  div{
    display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 171%;
    color: var(--grey100);
  }

  > span {
    font-weight: 600;
    font-size: 14px;
    line-height: 171%;
    color: var(--grey100);
  }
  }
`;
