import { ChangeEvent, useState } from 'react';

import ResetButton from '#/assets/icons/reset-button.svg?react';
import SearchButton from '#/assets/icons/search-button.svg?react';

import * as S from './index.style';

interface SearchInputProps {
    value: string;
    onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
    onReset: () => void;
}

function SearchInput({ value, onChangeValue, onReset }: SearchInputProps) {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const isActive = isFocused || value.length !== 0;

    return (
        <S.Container isActive={isActive}>
            <SearchButton />
            <S.Input
                value={value}
                type="text"
                placeholder="지번, 도로명, 건물명으로 검색"
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

export default SearchInput;
