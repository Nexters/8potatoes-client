import { ElementType, HTMLAttributes } from 'react';

import { FONT_STYLE_NAME } from '#/styles/font';

import { textStyle } from './Text.style';

export interface TextProps extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
    color?: string;
    typography: keyof typeof FONT_STYLE_NAME;
    className: string;
}

export const Text = ({
    children,
    color,
    typography,
    className,
    as,
    ...restProps
}: TextProps) => {
    const TextComponent = as || 'p';
    return (
        <TextComponent
            className={className}
            css={textStyle({ color, typography })}
            {...restProps}
        >
            {children}
        </TextComponent>
    );
};
