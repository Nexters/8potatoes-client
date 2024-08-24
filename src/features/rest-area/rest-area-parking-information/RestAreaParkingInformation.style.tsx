import styled from '@emotion/styled';

import { FlexBox } from '#/components/flex-box';
import { theme } from '#/styles/theme';

export const CardGroup = styled(FlexBox)`
    width: 100%;
    align-items: center;
`;

export const Card = styled(FlexBox)`
    padding: 20px;
    align-items: center;
    flex-grow: 1;
    text-align: center;
    white-space: nowrap;

    background-color: ${theme.color.main[10]};
    border-radius: 16px;
`;

export const UpdateNotice = styled(FlexBox)`
    margin-top: 8px;
`;
