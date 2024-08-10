import { css } from '@emotion/react';
import styled from '@emotion/styled';

import type { FlexBoxProps } from './FlexBox';

export const Container = styled.div(
    ({ row, gap, flexOption }: FlexBoxProps) => {
        const flexDirection = row ? 'row' : 'column';
        const flexGap = Array.isArray(gap)
            ? `${gap[0]}px ${gap[1]}px`
            : `${gap}px`;

        return css`
            display: flex;
            flex-direction: ${flexDirection};
            gap: ${flexGap};
            ${flexOption}
        `;
    },
);
