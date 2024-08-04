import { PropsWithChildren } from 'react';

import * as S from './HeaderContents.style';

export function HeaderContents({ children }: PropsWithChildren) {
    return <S.Container>{children}</S.Container>;
}
