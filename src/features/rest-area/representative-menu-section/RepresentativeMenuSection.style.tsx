import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { FlexBox } from '#/components/flex-box';
import { Text } from '#/components/text';
import { theme } from '#/styles/theme';

export const Container = styled(FlexBox)`
    width: 100%;
    align-items: flex-start;
    overflow-x: hidden;
`;

export const BestMenuContainer = styled(motion(FlexBox))`
    width: 200%;
    align-items: center;
`;

export const BestMenuSection = styled.div(
    ({ isNeedPagination }: { isNeedPagination: boolean }) => {
        const padding = isNeedPagination ? '40px 44px 32px 44px' : '40px';

        return css`
            width: 375px;
            padding: ${padding};
            text-align: center;
            white-space: nowrap;
            background-color: ${theme.color.wht[100]};
        `;
    },
);

export const BestMenuImage = styled.img`
    width: 180px;
    height: 180px;

    margin: 28px 0 20px 0;
    border-radius: 180px;
`;

export const Description = styled(Text)`
    white-space: normal;
`;

export const PaginationSection = styled(FlexBox)`
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${theme.color.wht[100]};
    padding-bottom: 40px;
`;

export const PaginationIcon = styled.div(
    ({ isActive }: { isActive: boolean }) => css`
        width: 8px;
        height: 8px;
        border-radius: 8px;
        background-color: ${isActive
            ? theme.color.blk[60]
            : theme.color.blk[50]};
    `,
);
