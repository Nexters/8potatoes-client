import { ChangeEvent, useState } from 'react';

import ResetButton from '#/assets/icons/reset-button.svg?react';
import SearchButton from '#/assets/icons/search-button.svg?react';

import * as S from './SearchInput.style';

interface SearchInputProps {
    value: string;
    isValid?: boolean;
    placeholder?: string;
    onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
    onReset: () => void;
}

export function SearchInput({
    value,
    isValid = true,
    placeholder = '',
    onChangeValue,
    onReset,
}: SearchInputProps) {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const isActive = isFocused || value.length !== 0;

    return (
        <S.Container isFocused={isFocused} isValid={isValid}>
            <SearchButton />
            <S.Input
                value={value}
                type="text"
                placeholder={placeholder}
                onChange={onChangeValue}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {isActive && (
                <button onClick={onReset}>
                    <ResetButton />
                </button>
            )}
        </S.Container>
    );
}
