import styled from '@emotion/styled';

import { FlexBox } from '#/components/flex-box';
import { theme } from '#/styles/theme';

export const Container = styled(FlexBox)`
    width: 100%;
    background-color: ${theme.color.blk[5]};
`;

export const MenuSection = styled(FlexBox)`
    overflow-y: hidden;
`;

export const MenuWrapper = styled.div`
    padding: 0 20px 20px 20px;
    overflow-y: auto;
    background-color: ${theme.color.wht[100]};

    &::-webkit-scrollbar {
        display: none;
    }
`;
