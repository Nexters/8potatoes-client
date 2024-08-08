import { PropsWithChildren } from 'react';

import * as S from './Button.style';

export interface ButtonProps extends PropsWithChildren {
    isValid: boolean;
    onClick: () => void;
}

export function Button({ isValid, children, onClick }: ButtonProps) {
    return (
        <S.Button isValid={isValid} onClick={onClick}>
            {children}
        </S.Button>
    );
}