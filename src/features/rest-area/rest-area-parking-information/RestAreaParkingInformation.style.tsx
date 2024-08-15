import styled from '@emotion/styled';

import { FlexBox } from '#/components/flex-box';

export const CardGroup = styled(FlexBox)`
    width: 100%;
    align-items: center;
`;

export const Card = styled(FlexBox)`
    padding: 24px;
    align-items: center;
    flex-grow: 1;
    text-align: center;
    white-space: nowrap;
`;

export const UpdateNotice = styled(FlexBox)`
    margin-top: 8px;
`;
