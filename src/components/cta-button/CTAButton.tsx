import { PropsWithChildren } from 'react';

import * as S from './CTAButton.style';

export interface ButtonProps extends PropsWithChildren {
    isValid: boolean;
    onClick: () => void;
}

export function CTAButton({ isValid, children, onClick }: ButtonProps) {
    return (
        <S.Button isValid={isValid} onClick={onClick}>
            {children}
        </S.Button>
    );
}
