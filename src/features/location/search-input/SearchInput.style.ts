import styled from '@emotion/styled';

export const Container = styled.div<{ isActive: boolean }>`
    box-sizing: border-box;
    width: 100%;
    padding: 12px 16px;
    display: inline-flex;
    align-items: center;
    gap: 6px;

    background-color: ${({ isActive }) => (isActive ? '#ffffff' : '#F4F0EA')};
    border: ${({ isActive }) =>
        `1px solid ${isActive ? '#ff7512' : '#D2CEC6'}`};
    border-radius: 16px;
`;

export const Input = styled.input`
    flex: 1;
    font-size: 16px;
`;
