import { PropsWithChildren } from 'react';

import * as S from './index.style';

export interface ButtonProps extends PropsWithChildren {
    isValid: boolean;
    onClick: () => void;
}

function Button({ isValid, children, onClick }: ButtonProps) {
    return (
        <S.Button isValid={isValid} onClick={onClick}>
            {children}
        </S.Button>
    );
}

export default Button;
