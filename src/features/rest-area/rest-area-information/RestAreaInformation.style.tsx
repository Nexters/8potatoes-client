import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { FlexBox } from '#/components/flex-box';
import { theme } from '#/styles/theme';
import { Text } from '#/components/text';

export const Container = styled.div`
    width: 100%;
    padding: 32px 20px;

    display: flex;
    flex-direction: column;
    gap: 20px 0;

    background-color: rgba(255, 241, 231, 0.7);
    border-radius: 20px;

    cursor: pointer;

    &:not(:last-child) {
        position: relative;

        &::after {
            z-index: 1;
            content: '';
            position: absolute;
            bottom: -2px;
            left: 20px;
            width: calc(100% - 40px);
            border-bottom: 4px dashed ${theme.color.main[30]};
        }
    }
`;

export const BottomSection = styled(FlexBox)`
    align-items: center;
    justify-content: center;
    padding: 12px;

    background-color: ${theme.color.wht[100]};
    border-radius: 12px;
`;

export const NaverRating = styled(FlexBox)`
    justify-content: center;
    align-items: center;

    color: ${theme.color.naver};

    & > svg {
        margin: auto 0;
    }
`;

export const OpenStateBadge = styled.div<{ isOperating: boolean }>(
    ({ isOperating }) => {
        const backgroundColor = isOperating
            ? theme.color.main[100]
            : theme.color.blk[10];
        const color = isOperating ? theme.color.wht[100] : theme.color.blk[60];

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
`;

// CenterBanner Style
export const BannerContainer = styled(FlexBox)`
    padding: 4px;
    justify-content: center;
    background-color: rgba(255, 214, 184, 50%);
    border-radius: 8px;
    color: ${theme.color.main[100]};
`;

type PriceTextProps = { isExist: boolean };

export const PriceText = styled(Text)(({ isExist }: PriceTextProps) => {
    const color = isExist ? theme.color.blk[100] : theme.color.blk[40];
    return css`
        color: ${color};
        flex-grow: 1;
    `
})