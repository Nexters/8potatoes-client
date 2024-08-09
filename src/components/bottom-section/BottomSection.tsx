import { PropsWithChildren } from 'react';

import * as S from './BottomSection.style';

export interface BottomSectionProps extends PropsWithChildren {}

export function BottomSection({ children }: BottomSectionProps) {
    return <S.Container>{children}</S.Container>;
}
