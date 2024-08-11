import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { FlexBox } from '#/components/flex-box';
import { theme } from '#/styles/theme';

export const Container = styled.div`
    width: 100%;
    overflow-x: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const CategoryList = styled(FlexBox)`
    width: max-content;
`

type CategoryOptionType = { isSelected?: boolean };

export const CategoryOption = styled(FlexBox)(({
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
