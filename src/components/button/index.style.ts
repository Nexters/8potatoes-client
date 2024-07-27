import styled from '@emotion/styled';

export const Button = styled.button<{ isValid: boolean }>`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
    border-radius: 16px;

    background-color: ${({ isValid }) => (isValid ? '#000000' : '#D2CEC6')};
    color: #ffffff;

    font-size: 16px;
    font-weight: 700;

    cursor: ${({ isValid }) => (isValid ? 'pointer' : 'default')};
`;
