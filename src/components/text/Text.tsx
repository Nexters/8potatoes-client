import { ElementType, HTMLAttributes } from 'react';

import { FONT_STYLE_NAME } from '#/styles/font';

import * as S from './Text.style';

export interface TextProps extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
    color?: string;
    className?: string;
    typography: keyof typeof FONT_STYLE_NAME;
}

export const Text = ({
    children,
    color,
    typography,
    as,
    ...restProps
}: TextProps) => {
    return (
        <S.Container
            as={as || 'p'}
            color={color}
            typography={typography}
            {...restProps}
        >
            {children}
        </S.Container>
    );
};
