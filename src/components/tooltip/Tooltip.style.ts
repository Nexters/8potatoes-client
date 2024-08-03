import styled from '@emotion/styled';

import { Z_INDEX } from '#/constants/z-index';

export const Arrow = styled.div`
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    width: 0;
    height: 0;

    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: ${({ theme }) => `12px solid ${theme.color.main[100]}`};
`;

export const Container = styled.div`
    z-index: ${Z_INDEX.TOOLTIP};
    position: relative;
    pointer-events: none;
`;

export const TooltipContents = styled.div<{ left: string; top: string }>`
    position: absolute;
    left: ${({ left }) => left};
    top: ${({ top }) => top};

    border-radius: 16px;
    padding: 8px 12px;
    background-color: ${({ theme }) => theme.color.main[100]};

    font-size: 16px;
    color: ${({ theme }) => theme.color.wht[100]};

    white-space: nowrap;
`;
