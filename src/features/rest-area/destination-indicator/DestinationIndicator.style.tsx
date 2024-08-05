import styled from '@emotion/styled';

import { theme } from '#/styles/theme';

export const Container = styled.div`
    position: absolute;
    top: 24px;
    left: 24px;

    display: flex;
    gap: 0 16px;
    align-items: center;

    width: calc(100% - 40px);
    height: 48px;

    background-color: ${theme.color.wht[100]};
    border-radius: 16px;
    border: 1px solid ${theme.color.main[50]};
`;

export const Destination = styled.p`
    flex-grow: 1;

    text-align: center;

    color: ${theme.color.blk[60]};
    font-weight: ${theme.font.weight.medium};
    font-size: 16px;
`