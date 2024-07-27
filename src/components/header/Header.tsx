import ArrowLeftIcon from '#/assets/icons/arrow-left.svg?react';

import * as S from './Header.style';

interface HeaderProps {
    title: string;
    isVisibleBackspace?: boolean;
    onClickBackspace?: () => void;
}

export function Header({
    isVisibleBackspace = true,
    onClickBackspace,
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
        </S.Container>
    );
}
