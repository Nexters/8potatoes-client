import styled from '@emotion/styled';

import { FlexBox } from '#/components/flex-box';
import { theme } from '#/styles/theme';

export const Container = styled(FlexBox)`
    height: 100dvh;
    align-items: center;
    justify-content: center;
    margin: auto;
`;

export const PreviousButton = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 16px;
    margin-top: 8px;
    border-radius: 16px;

    background-color: ${theme.color.main[100]};
    cursor: pointer;
`;
