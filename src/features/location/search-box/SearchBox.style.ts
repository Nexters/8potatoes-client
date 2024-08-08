import styled from '@emotion/styled';

import { Text } from '#/components/text';

export const Container = styled.li`
    display: flex;
    align-items: flex-start;
    gap: 8px;

    cursor: pointer;
`;

export const Contents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Highlight = styled.span`
    color: ${({ theme }) => theme.color.main[100]};
`;

export const Tag = styled(Text)`
    padding: 4px 6px;

    border: ${({ theme }) => `1px solid ${theme.color.bg[100]}`};
    border-radius: 4px;
`;

export const Addresses = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const AddressContainer = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;
