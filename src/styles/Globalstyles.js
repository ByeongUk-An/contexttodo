import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);

    body {
        background: #e9ecef;
        font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif'
    }
    @media ${(props) => props.theme.mobile} {
        body {
            background: white;
        }
    }
`;
