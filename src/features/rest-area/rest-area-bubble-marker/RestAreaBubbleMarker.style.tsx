import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { FlexBox } from '#/components/flex-box';
import { theme } from '#/styles/theme';

import type { RestAreaBubbleMarkerImplProps } from './RestAreaBubbleMarker';

type ContainerProps = Pick<RestAreaBubbleMarkerImplProps, 'isRecommend'>;

export const Container = styled(FlexBox)(({ isRecommend }: ContainerProps) => {
    const backgroundColor = isRecommend
        ? theme.color.main[100]
        : theme.color.wht[100];
    const borderColor = isRecommend ? 'transparent' : theme.color.main[100];
    const color = isRecommend ? theme.color.wht[100] : theme.color.main[100];

    return css`
        width: max-content;
        padding: 4px 12px;
        border-radius: 8px;
        background-color: ${backgroundColor};
        border: 1px solid ${borderColor};
        box-sizing: border-box;
        color: ${color};
        position: relative;
        align-items: center;

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

        & > svg {
            margin: auto 0;
        }
    `;
});

export const RestAreaName = styled.p`
    color: ${theme.color.wht[100]};
    font-size: 14px;
    font-weight: ${theme.font.weight.bold};
`;
