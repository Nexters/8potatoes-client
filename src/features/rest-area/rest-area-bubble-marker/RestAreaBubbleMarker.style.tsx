import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from '#/styles/theme';

import type { RestAreaBubbleMarkerImplProps } from './RestAreaBubbleMarker';

type ContainerProps = Pick<RestAreaBubbleMarkerImplProps, 'isCenter'>;

export const Container = styled.div(({ isCenter }: ContainerProps) => {
    const backgroundColor = isCenter
        ? theme.color.main[100]
        : theme.color.wht[100];
    const borderColor = isCenter ? 'transparent' : theme.color.main[100];
    const color = isCenter ? theme.color.wht[100] : theme.color.main[100];

    return css`
        width: max-content;
        padding: 4px 12px;
        border-radius: 8px;
        background-color: ${backgroundColor};
        border: 1px solid ${borderColor};
        box-sizing: border-box;
        color: ${color};
        position: relative;

        &::before {
            content: '';
            position: absolute;
            top: 25%;
            right: -6px;

            width: 10px;
            height: 10px;

            background-color: ${backgroundColor};
            transform: translateY(-50%) rotate(-27.5deg);
            clip-path: polygon(100% 50%, 0 0, 0 100%);
        }
    `;
});

export const RestAreaName = styled.p`
    color: ${theme.color.wht[100]};
    font-size: 14px;
    font-weight: ${theme.font.weight.bold};
`;
