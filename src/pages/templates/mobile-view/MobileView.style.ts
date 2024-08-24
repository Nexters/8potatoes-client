import { theme } from '#/styles/theme';
import styled from '@emotion/styled';

export const Wrapper = styled.main`
    position: relative;
    width: 100dvw;
    max-width: 375px;
    height: 100dvh;

    background-color: ${theme.color.wht[100]};
    margin: 0 auto;
`;
