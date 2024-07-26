import styled from '@emotion/styled';

export const Container = styled.div<{ isActive: boolean }>`
    box-sizing: border-box;
    padding: 12px;
    display: inline-flex;
    align-items: center;
    gap: 6px;

    background-color: ${({ isActive }) => (isActive ? '#ffffff' : '#F4F0EA')};
    border: ${({ isActive }) =>
        `1px solid ${isActive ? '#ff7512' : '#D2CEC6'}`};
    border-radius: 8px;
`;

export const Input = styled.input`
    width: 262px;

    font-size: 16px;
`;

export const ResetButton = styled.button`
    width: 24px;
    height: 24px;
`;
