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
        height: 32px;

        padding: 4px 0;
        background-color: ${backgroundColor};
        border-top: 1px solid ${borderColor};
        border-bottom: 1px solid ${borderColor};
        box-sizing: border-box;
        text-align: center;
        color: ${color};
    `;
});

export const RestAreaName = styled.p`
    color: ${theme.color.wht[100]};
    font-size: 14px;
    font-weight: ${theme.font.weight.bold};
`;
