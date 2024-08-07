import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from '#/styles/theme';

export const Container = styled.div`
    width: 100%;
    padding: 32px 20px;

    display: flex;
    flex-direction: column;
    gap: 20px 0;

    background-color: rgba(255, 241, 231, 0.7);
    border-radius: 20px;
`;

export const TopSection = styled.div`
    display: flex;
    gap: 0 20px;
`;

export const BottomSection = styled.div`
    display: flex;
    padding: 12px 20px;

    background-color: ${theme.color.wht[100]};
    border-radius: 12px;
`;

export const RestAreaSection = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 16px 0;
`;

export const DetailSection = styled.div`
    display: flex;
    align-items: center;
`;

export const NaverRating = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 2px;
    color: ${theme.color.naver};

    & > svg {
        margin: auto 0;
    }
`

export const OpenStateBadge = styled.div<{ isRestAreaOpen: boolean }>(
    ({ isRestAreaOpen }) => {
        const backgroundColor = isRestAreaOpen
            ? theme.color.main[100]
            : theme.color.blk[10];
        const color = isRestAreaOpen
            ? theme.color.wht[100]
            : theme.color.blk[60];

        return css`
            height: fit-content;
            padding: 8px;
            border-radius: 8px;
            background-color: ${backgroundColor};
            color: ${color};

            display: flex;
            align-items: center;
            gap: 0 4px;

            & > svg {
                color: ${color};
            }
        `;
    },
);

export const Divider = styled.div`
    width: 1px;
    height: 12px;
    margin: 0 8px;
    
    background-color: ${theme.color.blk[30]};

`