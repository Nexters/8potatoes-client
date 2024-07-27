import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import LocationPointerIcon from '#/assets/icons/location-pointer.svg?react';
import useIntersectionObserver from '#/hooks/useIntersectionObserver';
import { useGetLocationSearch } from '#/query-hooks/location/query';
import {
    GeolocationCoordinatesType,
    LocationInformationType,
    SelectedLocationType,
} from '#/types/location';
import { debounce } from '#/utils/common';

import CurrentLocationSearch from '../current-location-search';
import SearchBox from '../search-box';
import SearchInput from '../search-input';
import SearchTip from '../search-tip';

import * as S from './index.style';

interface SearchListPropsType {
    onSelect: (location: SelectedLocationType) => void;
    onClose: () => void;
}

function Search({ onSelect, onClose }: SearchListPropsType) {
    const [isCurrentLocationSearch, setIsCurrentLocationSearch] =
        useState<boolean>(false);

    const [searchInput, setSearchInput] = useState<string>('');
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [geolocationCoordinates, setGeolocationCoordinates] =
        useState<GeolocationCoordinatesType>({ latitude: 0, longitude: 0 });

    const {
        data,

        isLoading,
        isSuccess,
        hasNextPage,
        fetchNextPage,
    } = useGetLocationSearch({
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
        debounce((searchInput: string) => {
            setSearchKeyword(searchInput);
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
        <S.Wrapper>
            {isCurrentLocationSearch ? (
                <CurrentLocationSearch
                    onSelect={onSelect}
                    onCloseSearch={onClose}
                />
            ) : (
                <S.ContentsContainer>
                    <S.HeaderContents>
                        <SearchInput
                            value={searchInput}
                            onChangeValue={handleChangeSearchInput}
                            onReset={() => setSearchInput('')}
                        />

                        <S.CurrentLocation
                            onClick={() => setIsCurrentLocationSearch(true)}
                        >
                            <LocationPointerIcon width={24} height={24} />
                            <S.CurrentLocationText>
                                현재 위치로 주소 찾기
                            </S.CurrentLocationText>
                        </S.CurrentLocation>

                        <S.SearchContainer>
                            {searchKeyword.length !== 0 &&
                                !isLoading &&
                                isSuccess && (
                                    <S.SearchText>
                                        <S.Keyword>{searchKeyword}</S.Keyword>{' '}
                                        검색된 주소
                                    </S.SearchText>
                                )}
                            {searchKeyword.length !== 0 &&
                                !isLoading &&
                                !isSuccess && (
                                    <S.NoContentText>
                                        검색 결과가 없습니다.
                                    </S.NoContentText>
                                )}
                        </S.SearchContainer>

                        <S.DottedBorder />
                    </S.HeaderContents>

                    <S.ListContents>
                        {searchKeyword.length === 0 && !isSuccess && (
                            <SearchTip />
                        )}

                        {isSuccess && (
                            <ul>
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
                    </S.ListContents>
                </S.ContentsContainer>
            )}
        </S.Wrapper>
    );
}

export default Search;
