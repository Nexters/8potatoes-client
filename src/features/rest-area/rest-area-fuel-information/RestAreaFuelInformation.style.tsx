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

export const CardGroup = styled(FlexBox)`
    width: 100%;
    align-items: center;
`

export const Card = styled(FlexBox)`
    padding: 24px;
    align-items: center;
    flex-grow: 1;
    text-align: center;
    white-space: nowrap;
`

export const AvailableChargeOption = styled(FlexBox)`
    width: 100%;
    align-items: center;
`

export const DashedLine = styled.div`
    flex-grow: 1;
    height: 1px;
    border-bottom: 1px dashed ${theme.color.blk[10]}
`