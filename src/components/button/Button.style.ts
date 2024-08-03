import styled from '@emotion/styled';

export const Button = styled.button<{ isValid: boolean }>`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
    border-radius: 16px;

    background-color: ${({ isValid, theme }) =>
        isValid ? theme.color.main[100] : theme.color.blk[20]};
    color: ${({ theme }) => theme.color.wht[100]};

    font-size: 16px;
    font-weight: 700;

    cursor: ${({ isValid }) => (isValid ? 'pointer' : 'default')};
`;
