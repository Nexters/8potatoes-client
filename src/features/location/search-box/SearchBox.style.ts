import styled from '@emotion/styled';

export const Container = styled.li`
    display: flex;
    gap: 8px;

    cursor: pointer;
`;

export const Contents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const LocationName = styled.div`
    font-size: 16px;
    font-weight: 700;
`;

export const Highlight = styled.span`
    color: ${({ theme }) => theme.color.main[100]};
`;

export const Tag = styled.span`
    padding: 6px 8px;
    color: ${({ theme }) => theme.color.blk[60]};
    border: ${({ theme }) => `1px solid ${theme.color.bg[100]}`};
    border-radius: 4px;

    font-size: 14px;
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

export const Address = styled.span`
    color: ${({ theme }) => theme.color.blk[60]};
    font-size: 14px;
`;
