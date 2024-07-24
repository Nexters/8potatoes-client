import { PropsWithChildren } from 'react';

import * as S from './MobileView.style';

export const MobileView = ({ children }: PropsWithChildren) => (
    <S.Wrapper>{children}</S.Wrapper>
);
