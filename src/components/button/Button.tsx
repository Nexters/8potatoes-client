import { PropsWithChildren } from 'react';

import { theme } from '#/styles/theme';

import { Text } from '../text';

import * as S from './Button.style';

export interface ButtonProps extends PropsWithChildren {
    isValid: boolean;
    onClick: () => void;
}

export function Button({ isValid, children, onClick }: ButtonProps) {
    return (
        <S.Button isValid={isValid} onClick={onClick}>
            <Text typography="buttonBold16" color={theme.color.wht[100]}>
                {children}
            </Text>
        </S.Button>
    );
}
