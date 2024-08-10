import { PropsWithChildren } from 'react';

import * as S from './BottomSection.style';

export interface BottomSectionProps extends PropsWithChildren {
    className?: string;
}

export function BottomSection({ children, className }: BottomSectionProps) {
    return <S.Container className={className}>{children}</S.Container>;
}
