import { css } from '@emotion/react';

import { theme } from '#/styles/theme';

import type { TextProps } from './Text';

type TextStyleProps = Pick<TextProps, 'color' | 'typography'>;

export const textStyle = ({ color, typography }: TextStyleProps) => css`
    color: ${color ?? theme.color.blk[100]};
    font-size: ${theme.typography[typography].fontSize};
    font-weight: ${theme.typography[typography].fontWeight};
    line-height: ${theme.typography[typography].lineHeight};
`;
