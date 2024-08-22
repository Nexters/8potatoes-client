import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from '#/styles/theme';

export const shine = keyframes`
    to {
        background-position: right -4rem top 0;
    }
`;

export const Container = styled.div`
    background-color: ${theme.color.blk[10]};
    border-radius: 4px;

    background-image: linear-gradient(
        90deg,
        ${theme.color.blk[10]},
        ${theme.color.blk[5]},
        ${theme.color.blk[10]}
    );
    background-position: left -4rem top 0;
    background-size: 4rem 100%;
    background-repeat: no-repeat;
    animation: ${shine} 1.5s infinite ease-in-out;
`;
