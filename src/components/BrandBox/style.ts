import styled from "styled-components";
import {FiShoppingBag} from "react-icons/fi"
import ellipse from '../../assets/Ellipse 10.png'


export const StyledBrandBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 26px 24px;
  gap: 22px;
  width: 430px;
`;

export const BrandDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  width: 100%;
  height: 95px;
  background: var(--white);
  border: 1px solid var(--grey1);
  box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  p{
    max-width: 260px;
  }
`;

export const BagBox = styled.figure`
display: flex;
justify-content: center;
align-items: center;
width: 60px;
height: 60px;
background: rgba(39, 174, 96, 0.1);
border-radius: 5px;
`
export const StyledBagIcon = styled(FiShoppingBag)`
width: 40px;
height: 40px;
color: var(--primary);
`
export const StyledEllipsesBox = styled.div`
width: 165px;
height: 85px;
background: var(--white) url(${ellipse});
background-repeat: space;
background-size: 24px;
color: var(--primary);
`