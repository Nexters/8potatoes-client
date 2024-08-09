import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from '#/styles/theme';

export const Button = styled.button<{ isValid: boolean }>(({ isValid }) => {
    const backgroundColor = isValid
        ? theme.color.main[100]
        : theme.color.blk[20];
    const cursor = isValid ? 'pointer' : 'default';

    return css`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 16px;
        border-radius: 16px;

        background-color: ${backgroundColor};
        cursor: ${cursor};
    `;
});
