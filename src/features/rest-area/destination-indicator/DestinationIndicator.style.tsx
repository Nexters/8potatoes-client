import styled from '@emotion/styled';

import { Text } from '#/components/text';
import { theme } from '#/styles/theme';

export const Container = styled.div`
    position: absolute;
    top: 24px;
    left: 24px;

    display: flex;
    gap: 0 16px;
    align-items: center;

    width: calc(100% - 40px);
    height: 48px;
    padding: 0 16px;

    background-color: ${theme.color.wht[100]};
    border-radius: 16px;
    border: 1px solid ${theme.color.main[50]};
`;

export const Destination = styled.div`
    flex-grow: 1;
    text-align: center;

    max-width: 131px;
`;

export const DestinationText = styled(Text)`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
