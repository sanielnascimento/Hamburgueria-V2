import { Logo } from "../../styles/components/Logo/style";
import { StyledText } from "../../styles/typography";
import {
  BagBox,
  BrandDescription,
  StyledBagIcon,
  StyledBrandBox,
  StyledEllipsesBox,
} from "./style";

export const BrandBox = () => {
  return (
    <StyledBrandBox>
      <Logo>
        Burguer<span>Kenzie</span>
      </Logo>
      <BrandDescription>
        <BagBox>
          <StyledBagIcon />
        </BagBox>
        <StyledText className="" lineHeight="1" id="s" tag="p" body="2" color="--grey3">{`
          A vida é como um sanduíche, é preciso recheá-la com os
          ${<StyledText className="" lineHeight="1" id="z" tag="span" body="3" color="--grey6">melhores
          </StyledText>}
          ingredientes.
        `}
        </StyledText>
      </BrandDescription>
      <StyledEllipsesBox />
    </StyledBrandBox>
  );
};
