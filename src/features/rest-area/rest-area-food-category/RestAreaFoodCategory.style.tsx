import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { FlexBox } from '#/components/flex-box';
import { theme } from '#/styles/theme';

export const Container = styled.div`
    width: 100%;
    overflow-x: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const CategoryList = styled(motion(FlexBox))`
    width: max-content;
    cursor: grab;
`;

type CategoryOptionType = { isSelected?: boolean };

export const CategoryOption = styled(motion(FlexBox))(({
    isSelected,
}: CategoryOptionType) => {
    const color = isSelected ? theme.color.main[100] : theme.color.blk[100];
    const borderColor = isSelected ? theme.color.main[100] : 'transparent';

    return css`
        color: ${color};
        align-items: center;
        text-align: center;

        & > img {
            width: 64px;
            height: 64px;

            border: 1px solid ${borderColor};
            background-color: ${theme.color.wht[100]};
            border-radius: 64px;
        }
    `;
});

export const Icon = styled(FlexBox)<{ isSelected: boolean }>(({
    isSelected,
}) => {
    const boxShadow = isSelected
        ? ``
        : `0px 4px 8px 0px rgba(77, 66, 52, 0.04)`;
    const border = isSelected
        ? `1.5px solid ${theme.color.main[100]}`
        : `1px solid ${theme.color.blk[5]}`;

    return css`
        width: 64px;
        height: 64px;

        border: ${border};
        border-radius: 50px;

        box-shadow: ${boxShadow};
    `;
});
