import styled from '@emotion/styled';

const PADDING = 20;

export const Button = styled.button<{ isValid: boolean }>`
    position: absolute;
    bottom: 28px;
    width: ${`calc(100% - ${PADDING * 2}px)`};

    display: flex;
    justify-content: center;
    padding: ${PADDING}px;
    border-radius: 16px;

    background-color: ${({ isValid }) => (isValid ? '#000000' : '#D2CEC6')};
    color: #ffffff;

    font-size: 16px;
    font-weight: 700;

    cursor: ${({ isValid }) => (isValid ? 'pointer' : 'default')};
`;
