import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

:root{
    --primary: #27AE60;
    --primary-5: #93D7AF;
    --secondary: #EB5757;
    
    --grey6: #333333;
    --grey5: #999999;
    --grey3: #828282;
    --grey2: #BDBDBD;
    --grey1: #E0E0E0;
    --grey0: #F5F5F5;

    --opacity: rgba(0,0,0, 0.5);

    --negative: #E60000;
    --warning: #FFCD07;
    --sucess: #168821;
    --white: #ffffff;
    --info: #155BCB;

    --fsize1: 1.625rem; /* 26px */
    --fsize2: 1.375rem; /* 22px */
    --fsize3: 1.125rem; /* 18px */
    --fsize4: 1.000rem; /* 16px */
    --fsize5: 0.875rem; /* 14px */
    --fsize6: 0.750rem; /* 12px */

    --fweight-b: 700;
    --fweight-s: 600;
    --fweight-r: 400;    
}

body{
    font-family: 'Inter', sans-serif;
}
`;
