import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from '#/styles/theme';

import { DestinationMarkerImplProp } from './DestinationMarker';

type ContainerProps = Pick<DestinationMarkerImplProp, 'isStart'>;

export const Container = styled.div(({ isStart }: ContainerProps) => {
    const color = isStart ? theme.color.error[100] : theme.color.good[100];
    return css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px 0;

        width: fit-content;
        color: ${color};
    `;
});
