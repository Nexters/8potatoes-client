import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import useIntersectionObserver from '#/hooks/useIntersectionObserver';
import { useGetLocationSearch } from '#/query-hooks/location/query';
import {
    GeolocationCoordinatesType,
    LocationInformationType,
} from '#/types/location';
import { debounce } from '#/utils/common';

import SearchBox from '../search-box';
import SearchInput from '../search-input';
import SearchTip from '../search-tip';

import * as S from './index.style';

interface SearchListPropsType {
    onSelect: (location: LocationInformationType) => void;
    onCancel: () => void;
}

function SearchList({ onSelect, onCancel }: SearchListPropsType) {
    const [searchInput, setSearchInput] = useState<string>('');

    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [geolocationCoordinates, setGeolocationCoordinates] =
        useState<GeolocationCoordinatesType>({ latitude: 0, longitude: 0 });

    const { data, hasNextPage, fetchNextPage } = useGetLocationSearch({
        searchKeyword,
        geolocationCoordinates,
    });

    const { targetRef } = useIntersectionObserver<HTMLDivElement>({
        onIntersect: fetchNextPage,
        enabled: !!hasNextPage,
    });

    useEffect(() => {
        function handleSuccess(position: GeolocationPosition) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            setGeolocationCoordinates({ latitude, longitude });
        }
        function handleError(error: GeolocationPositionError) {
            console.error(error);
        }

        navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }, []);

    const handleSearchDebounce = useCallback(
        debounce((searchInput) => {
            const search = searchInput as string;
            setSearchKeyword(search);
        }),
        [],
    );

    useEffect(() => {
        handleSearchDebounce(searchInput);
    }, [searchInput, handleSearchDebounce]);

    const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    return (
        <div>
            <SearchInput
                value={searchInput}
                onChangeValue={handleChangeSearchInput}
                onReset={() => setSearchInput('')}
            />

            {searchKeyword.length !== 0 && (
                <S.KeywordContainer>
                    <S.Keyword>{searchKeyword}</S.Keyword> 검색된 주소
                </S.KeywordContainer>
            )}

            {searchKeyword.length === 0 && !data && <SearchTip />}

            {data && (
                <ul style={{ listStyle: 'none' }}>
                    {data.map((item: LocationInformationType) => (
                        <SearchBox
                            key={item.pkey}
                            searchInput={searchInput}
                            location={item}
                            onSelect={onSelect}
                        />
                    ))}
                </ul>
            )}
            <div ref={targetRef}></div>
        </div>
    );
}

export default SearchList;
