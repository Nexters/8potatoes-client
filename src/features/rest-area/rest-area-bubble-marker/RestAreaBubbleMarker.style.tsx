import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { FlexBox } from '#/components/flex-box';
import { theme } from '#/styles/theme';

import type { RestAreaBubbleMarkerImplProps } from './RestAreaBubbleMarker';

type ContainerProps = Pick<RestAreaBubbleMarkerImplProps, 'isCenter'>;

export const Container = styled(FlexBox)<ContainerProps>(({ isCenter }) => {
    const borderColor = isCenter ? 'transparent' : theme.color.main[100];
    const backgroundColor = isCenter
        ? theme.color.main[100]
        : theme.color.wht[100];

    return css`
        width: fit-content;
        padding: 6px 8px;
        border-radius: 8px;
        background-color: ${backgroundColor};
        position: relative;

        border: 1px solid ${borderColor};
        color: ${theme.color.wht[100]};

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
    font-size: 14px;
    font-weight: ${theme.font.weight.bold};
`;
