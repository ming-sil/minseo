import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  maincolor: "#26b574",
  textcolor: "#1d1d1d",
};

export const Globalstyle = createGlobalStyle`
    ${reset}
   
    body{
        font-family: 'Noto Sans KR', sans-serif;
        box-sizing: border-box;
        word-break: keep-all;
    }
    a{
        text-decoration: none;
        color: #1d1d1d;
    }
`;
