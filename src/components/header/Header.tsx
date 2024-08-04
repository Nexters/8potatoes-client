import ArrowLeftIcon from '#/assets/icons/arrow-left.svg?react';
import CloseIcon from '#/assets/icons/close.svg?react';

import * as S from './Header.style';

interface HeaderProps {
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
            <S.Title>{title}</S.Title>
            {isVisibleClose && (
                <S.Close onClick={onClickClose}>
                    <CloseIcon />
                </S.Close>
            )}
        </S.Container>
    );
}
