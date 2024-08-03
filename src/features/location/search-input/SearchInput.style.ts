import styled from '@emotion/styled';

export const Container = styled.div<{ isFocused: boolean; isValid: boolean }>`
    box-sizing: border-box;
    width: 100%;
    padding: 12px 16px;
    display: inline-flex;
    align-items: center;
    gap: 6px;

    background-color: ${({ isFocused, theme }) =>
        isFocused ? theme.color.wht[100] : theme.color.blk[5]};
    border: ${({ isFocused, isValid, theme }) =>
        `1px solid ${isFocused || isValid ? theme.color.select[100] : isFocused && !isValid ? theme.color.error[100] : 'transparent'}`};
    border-radius: 16px;
`;

export const Input = styled.input`
    flex: 1;
    font-size: 16px;

    color: ${({ theme }) => theme.color.blk[100]};

    ::placeholder {
        color: ${({ theme }) => theme.color.blk[40]};
    }
`;
