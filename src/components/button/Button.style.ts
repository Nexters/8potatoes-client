import styled from '@emotion/styled';

export const Button = styled.button<{ isValid: boolean }>`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 16px;
    border-radius: 16px;

    background-color: ${({ isValid, theme }) =>
        isValid ? theme.color.main[100] : theme.color.blk[20]};

    cursor: ${({ isValid }) => (isValid ? 'pointer' : 'default')};
`;
