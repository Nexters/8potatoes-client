import styled from '@emotion/styled';

import { theme } from '#/styles/theme';

export const Container = styled.div`
    width: fit-content;
    padding: 4px 8px;
    border-radius: 8px;
    background-color: ${theme.color.main[100]};
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 25%;
        right: -6px;

        width: 10px;
        height: 10px;

        background-color: ${theme.color.main[100]};
        transform: translateY(-50%) rotate(-27.5deg);
        clip-path: polygon(100% 50%, 0 0, 0 100%);
    }
`;

export const RestAreaName = styled.p`
    color: ${theme.color.wht[100]};
    font-size: 14px;
    font-weight: ${theme.font.weight.bold};
`;
