import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import LocationPointerIcon from '#/assets/icons/location-pointer.svg?react';
import { Header } from '#/components/header';
import useIntersectionObserver from '#/hooks/useIntersectionObserver';
import { HeaderContents } from '#/pages/templates/header-contents';
import { useGetLocationSearch } from '#/query-hooks/location/query';
import {
    GeolocationCoordinatesType,
    LocationInformationType,
    SelectedLocationType,
} from '#/types/location';
import { debounce } from '#/utils/common';

import { CurrentLocationSearch } from '../current-location-search';
import { SearchBox } from '../search-box/SearchBox';
import { SearchInput } from '../search-input/SearchInput';
import { SearchTip } from '../search-tip/SearchTip';

import * as S from './Search.style';

interface SearchListPropsType {
    onSelect: (location: SelectedLocationType) => void;
    onClose: () => void;
}

export function Search({ onSelect, onClose }: SearchListPropsType) {
    const [isCurrentLocationSearch, setIsCurrentLocationSearch] =
        useState<boolean>(false);

    const [searchInput, setSearchInput] = useState<string>('');
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [geolocationCoordinates, setGeolocationCoordinates] =
        useState<GeolocationCoordinatesType>({ latitude: 0, longitude: 0 });

    const { data, isLoading, isSuccess, hasNextPage, fetchNextPage } =
        useGetLocationSearch({
            searchKeyword,
            geolocationCoordinates,
        });

    const { targetRef } = useIntersectionObserver<HTMLDivElement>({
        onIntersect: fetchNextPage,
        enabled: !!hasNextPage,
    });

    const isEmptyInput = searchKeyword.length === 0;
    const hasResult = !isEmptyInput && !isLoading && isSuccess;
    const hasNoResult = !isEmptyInput && !isLoading && !isSuccess;

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

    const handleOpenCurrentLocationSearch = () => {
        setSearchInput('');
        setIsCurrentLocationSearch(true);
    };

    const handleCloseCurrentLocationSearch = () => {
        setIsCurrentLocationSearch(false);
    };

    return (
        <S.Wrapper>
            {isCurrentLocationSearch ? (
                <CurrentLocationSearch
                    onSelect={onSelect}
                    onCloseSearch={handleCloseCurrentLocationSearch}
                />
            ) : (
                <>
                    <Header
                        title="위치 검색"
                        isVisibleClose
                        onClickClose={onClose}
                    />
                    <HeaderContents>
                        <S.ContentsContainer>
                            <S.HeaderContents>
                                <SearchInput
                                    value={searchInput}
                                    isInvalid={hasNoResult}
                                    isValid={hasResult}
                                    placeholder="지번, 도로명, 건물명으로 검색"
                                    onChangeValue={handleChangeSearchInput}
                                    onReset={() => setSearchInput('')}
                                />

                                <S.CurrentLocation
                                    onClick={handleOpenCurrentLocationSearch}
                                >
                                    <S.LocationPointerContainer>
                                        <LocationPointerIcon
                                            width={12}
                                            height={12}
                                        />
                                    </S.LocationPointerContainer>
                                    <S.CurrentLocationText>
                                        현재 위치로 주소 찾기
                                    </S.CurrentLocationText>
                                </S.CurrentLocation>

                                <S.SearchContainer>
                                    {hasResult && (
                                        <>
                                            <S.SearchText>
                                                <S.Keyword>
                                                    {searchKeyword}
                                                </S.Keyword>{' '}
                                                검색된 주소
                                            </S.SearchText>
                                            <S.DottedBorder />
                                        </>
                                    )}
                                </S.SearchContainer>
                            </S.HeaderContents>

                            <S.ListContents>
                                {(isEmptyInput || hasNoResult) && (
                                    <S.SearchTipContainer>
                                        <SearchTip>
                                            {isEmptyInput
                                                ? '위치를 입력해주세요.'
                                                : '검색 결과가 없습니다.'}
                                        </SearchTip>
                                    </S.SearchTipContainer>
                                )}

                                {isSuccess && (
                                    <S.SearchList>
                                        {data.map(
                                            (item: LocationInformationType) => (
                                                <SearchBox
                                                    key={item.pkey}
                                                    searchInput={searchInput}
                                                    location={item}
                                                    onSelect={onSelect}
                                                />
                                            ),
                                        )}
                                    </S.SearchList>
                                )}
                                <div ref={targetRef}></div>
                            </S.ListContents>
                        </S.ContentsContainer>
                    </HeaderContents>
                </>
            )}
        </S.Wrapper>
    );
}
