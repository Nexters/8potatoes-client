import { Global, css } from '@emotion/react';

const globalCss = css`
    @font-face {
        font-family: 'SUIT Variable';
        font-weight: 100 900;
        src: url('./src/assets/fonts/SUIT-Variable.woff2')
            format('woff2-variations');
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
    }

    ul[role='list'],
    ol[role='list'] {
        list-style: none;
    }

    html:focus-within {
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
    }

    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    img,
    picture,
    svg,
    video,
    canvas {
        max-width: 100%;
        height: auto;
        vertical-align: middle;
        font-style: italic;
        background-repeat: no-repeat;
        background-size: cover;
    }

    button {
        background: none;
        border: none;
    }

    input {
        border: none;
        background: none;
    }
    input:focus {
        outline: none;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    body,
    html {
        height: 100%;
        scroll-behavior: smooth;
        margin: 0;

        font-family: 'SUIT Variable';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export const GlobalStyle = () => <Global styles={globalCss} />;
