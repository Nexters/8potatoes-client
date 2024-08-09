import { CSSProperties } from 'react';

import ArrowLeftIcon from '#/assets/icons/arrow-left.svg?react';
import CloseIcon from '#/assets/icons/close.svg?react';
import { theme } from '#/styles/theme';

import { Text } from '../text';

import * as S from './Header.style';

export interface HeaderProps {
    title: string;
    isVisibleBackspace?: boolean;
    onClickBackspace?: () => void;
    isVisibleClose?: boolean;
    onClickClose?: () => void;
}

export function Header({
    isVisibleBackspace = false,
    onClickBackspace,
    isVisibleClose = false,
    onClickClose,
    title,
}: HeaderProps) {
    return (
        <S.Container>
            {isVisibleBackspace && (
                <S.BackSpace onClick={onClickBackspace}>
                    <ArrowLeftIcon />
                </S.BackSpace>
            )}
            <Text typography="headingBold18" color={theme.color.blk[100]}>
                {title}
            </Text>
            {isVisibleClose && (
                <S.Close onClick={onClickClose}>
                    <CloseIcon />
                </S.Close>
            )}
        </S.Container>
    );
}
