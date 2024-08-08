import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from '#/styles/theme';

import type { TextProps } from './Text';

type TextStyleProps = Pick<TextProps, 'color' | 'typography'>;

export const Container = styled.p(
    ({ color, typography }: TextStyleProps) => css`
        color: ${color ?? 'inherit'};
        font-size: ${theme.typography[typography].fontSize};
        font-weight: ${theme.typography[typography].fontWeight};
        line-height: ${theme.typography[typography].lineHeight};
    `,
);
