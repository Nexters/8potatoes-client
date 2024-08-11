import styled from '@emotion/styled';

import { FlexBox } from '#/components/flex-box';
import { theme } from '#/styles/theme';

export const Section = styled(FlexBox)`
    padding: 40px 20px;
    background-color: ${theme.color.wht[100]};
`;

export const Title = styled(FlexBox)`
    align-items: center;
`;

export const CategoryWrapper = styled.div`
    width: 100%;
    overflow-x: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const CategoryList = styled(FlexBox)`
`

export const CategoryOption = styled(FlexBox)`
    text-align: center;
`

export const CategoryIcon = styled.div`
    width: 64px;
    height: 64px;
    padding: 16px;

    border: 1px solid ${theme.color.main[100]};
    background-color: ${theme.color.wht[100]};
    border-radius: 64px;
`