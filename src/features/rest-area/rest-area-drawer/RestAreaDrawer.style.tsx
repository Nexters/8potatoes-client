import styled from '@emotion/styled';

import { Text } from '#/components/text';
import { FlexBox } from '#/components/flex-box';

export const Container = styled(FlexBox)`
    overflow: hidden;
    height: inherit;
`

export const Header = styled(FlexBox)`
    text-align: center;
`;

export const RestAreaAmount = styled(Text)`
    margin: 20px auto;
`;

export const RestAreaList = styled.div`
    overflow: auto;
    height: min-content;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const RestAreaListInner = styled.div`
    display: flex;
    flex-direction: column;
`;
