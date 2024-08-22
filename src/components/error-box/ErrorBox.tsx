import { PropsWithChildren } from 'react';

import { theme } from '#/styles/theme';

import { Text } from '../text';

import * as S from './ErrorBox.style';

export const ErrorBox = ({ children }: PropsWithChildren<unknown>) => (
    <S.Container gap={8}>
        <S.ErrorImage
            width={225}
            height={225}
            src={`${import.meta.env.VITE_ASSET_URL}/error.png`}
            alt="not_found"
        />
        <S.TextSection gap={4}>
            <Text typography="bodyMedium16" color={theme.color.blk[40]}>
                이런! 에러가 발생했습니다.
            </Text>
            <Text typography="bodyMedium16" color={theme.color.blk[40]}>
                새로고침 후 다시 시도해주세요.
            </Text>
        </S.TextSection>
        {children}
    </S.Container>
);
