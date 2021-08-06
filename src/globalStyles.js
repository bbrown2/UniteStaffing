import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;


    // font sizes
    --fontSm: 16px;
    --fontMd: 24px;
    --fontLg: 36px;
    --fontXl: 54px;
    --fontXXl: 72px;
    --fontHuge: 90px;

    // font styles
    --fontNormal: 300;
    --fontMedium: 500;
    --fontBold: bold;
}


html {
    height: 100%;
}

body {
    min-height: 100%;
    position: relative;
}



`;

export const Container = styled.div`
	max-width: 1450px;
	margin: 0 auto;
`;

export default GlobalStyle;
