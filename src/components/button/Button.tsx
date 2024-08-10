import { ComponentProps } from 'react';

import { theme } from '#/styles/theme';

import { Text } from '../text';

import * as S from './Button.style';

export interface ButtonProps extends ComponentProps<'button'> {
    isValid: boolean;
}

export function Button({
    isValid,
    children,
    onClick,
    ...restProps
}: ButtonProps) {
    return (
        <S.Button isValid={isValid} onClick={onClick} {...restProps}>
            <Text typography="buttonBold16" color={theme.color.wht[100]}>
                {children}
            </Text>
        </S.Button>
    );
}
