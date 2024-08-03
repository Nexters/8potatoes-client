import styled from '@emotion/styled';

export const Container = styled.span`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const IconBackground = styled.div`
    border-radius: 30px;
    background-color: ${({ theme }) => theme.color.main[10]};
    padding: 10px;
`;

export const Tip = styled.div`
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.color.blk[40]};

    margin-top: 20px;
`;
