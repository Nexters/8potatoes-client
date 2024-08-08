import {
    ChangeEvent,
    Dispatch,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

import LocationPointerIcon from '#/assets/icons/location-pointer.svg?react';
import { Header } from '#/components/header';
import { useGeolocationPosition } from '#/hooks/useGeolocationPosition';
import useIntersectionObserver from '#/hooks/useIntersectionObserver';
import { useGetLocationSearch } from '#/query-hooks/location/query';
import {
    GeolocationCoordinatesType,
    LocationInformationType,
    SelectedLocationType,
} from '#/types/location';
import { debounce } from '#/utils/common';

import { SearchBox } from '../search-box/SearchBox';
import { SearchInput } from '../search-input/SearchInput';
import { SearchTip } from '../search-tip/SearchTip';

import * as S from './Search.style';

interface SearchListPropsType {
    onSelect: (location: SelectedLocationType) => void;
    onClose: () => void;
    handleOpenCurrentLocation: () => void;
}

export function Search({
    onSelect,
    onClose,
    handleOpenCurrentLocation,
}: SearchListPropsType) {
    const [searchInput, setSearchInput] = useState<string>('');
    const [searchKeyword, setSearchKeyword] = useState<string>('');

    const { geolocationCoordinates } = useGeolocationPosition();

    const { data, isLoading, isSuccess, hasNextPage, fetchNextPage } =
        useGetLocationSearch({
            searchKeyword,
            geolocationCoordinates,
        });

    const rootRef = useRef<HTMLDivElement>(null);
    const { targetRef } = useIntersectionObserver<HTMLDivElement>({
        onIntersect: fetchNextPage,
        enabled: !!hasNextPage,
        root: rootRef.current,
        rootMargin: '40px',
    });

    const isEmptyInput = searchKeyword.length === 0;
    const hasResult = !isEmptyInput && !isLoading && isSuccess;
    const hasNoResult = !isEmptyInput && !isLoading && !isSuccess;

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
        handleOpenCurrentLocation();
    };

    return (
        <>
            <Header
                title="위치 검색"
                isVisibleClose
                onClickClose={onClose}
                style={{ width: 'calc(100% - 16px)' }}
            />

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
                            <LocationPointerIcon width={12} height={12} />
                        </S.LocationPointerContainer>
                        <S.CurrentLocationText>
                            현재 위치로 주소 찾기
                        </S.CurrentLocationText>
                    </S.CurrentLocation>

                    {isSuccess && <S.DashedBorder />}
                </S.HeaderContents>

                <S.ListContents ref={rootRef}>
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
                        <>
                            <S.SearchList>
                                {data.map((item: LocationInformationType) => (
                                    <SearchBox
                                        key={item.pkey}
                                        searchInput={searchInput}
                                        location={item}
                                        onSelect={onSelect}
                                    />
                                ))}
                                <div ref={targetRef}></div>
                            </S.SearchList>
                        </>
                    )}
                </S.ListContents>
            </S.ContentsContainer>
        </>
    );
}