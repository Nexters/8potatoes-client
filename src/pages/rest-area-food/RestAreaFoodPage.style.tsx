import styled from '@emotion/styled';

import { FlexBox } from '#/components/flex-box';
import { theme } from '#/styles/theme';

export const Container = styled(FlexBox)`
    width: 100%;
    background-color: ${theme.color.blk[5]};
`;

export const BestMenuSection = styled.div`
    padding: 40px;
    text-align: center;
    white-space: nowrap;
    background-color: ${theme.color.wht[100]};
`;

export const BestMenuImage = styled.img`
    width: 180px;
    height: 180px;

    margin: 32px 0 20px 0;
    border-radius: 180px;
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
