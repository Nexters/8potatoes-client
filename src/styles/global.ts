import { css } from '@emotion/react';

export const globalStyle = css`
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
        
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    @font-face {
        font-family: 'SUIT Variable';
        font-weight: 100 900;
        src: url('./SUIT-Variable.woff2') format('woff2-variations');
    }
`;
