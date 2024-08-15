import { css } from '@emotion/react';
import styled from '@emotion/styled';

import ArrowIcon from '#/assets/icons/tooltip-arrow.svg?react';
import { Z_INDEX } from '#/constants/z-index';
import { theme } from '#/styles/theme';

export const Arrow = styled(ArrowIcon)<{ direction: 'top' | 'bottom' }>(({
    direction,
}) => {
    const directionTop = {
        transform: 'translateX(-50%)',
        bottom: '-8px',
    };
    const directionBottom = {
        transform: 'translateX(-50%) rotate(180deg)',
        top: '-8px',
    };
    const arrowOption = direction === 'top' ? directionTop : directionBottom;

    return css`
        position: absolute;
        left: 50%;

        ${arrowOption}
    `;
});

export const Container = styled.div`
    z-index: ${Z_INDEX.TOOLTIP};
    position: relative;
    pointer-events: none;
`;

export const TooltipContents = styled.div<{ left: string; top: string }>(
    (props) => {
        const { left, top } = props;

        return css`
            position: absolute;
            left: ${left};
            top: ${top};

            border-radius: 18px;
            padding: 8px 20px;
            background-color: ${theme.color.main[100]};
            filter: drop-shadow(2px 4px 4px rgba(255, 117, 18, 0.2));

            white-space: nowrap;
        `;
    },
);
