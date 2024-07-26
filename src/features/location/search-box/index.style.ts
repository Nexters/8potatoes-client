import styled from '@emotion/styled';

export const Container = styled.li`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const LocationName = styled.div`
    font-size: 16px;
    font-weight: 700;
`;

export const Highlight = styled.span`
    color: #ff7512;
`;

export const Tag = styled.span`
    padding: 6px 8px;
    color: #90887d;
    border: 1px solid #eae0d6;
    border-radius: 4px;

    font-size: 14px;
`;

export const AddressContainer = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;

export const Address = styled.span`
    color: #90887d;

    font-size: 14px;
`;
