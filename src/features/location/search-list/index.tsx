import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';

import useIntersectionObserver from '#/hooks/useIntersectionObserver';
import { useGetLocationSearch } from '#/query-hooks/location/query';
import {
    GeolocationCoordinatesType,
    LocationInformationType,
} from '#/types/location';
import { debounce } from '#/utils/common';

import SearchBox from '../search-box';

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
        debounce(() => {
            setSearchKeyword(searchInput);
        }),
        [searchInput],
    );

    useEffect(() => {
        handleSearchDebounce();
    }, [searchInput, handleSearchDebounce]);

    const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    return (
        <div>
            <input
                value={searchInput}
                type="text"
                onChange={handleChangeSearchInput}
            />
            <button onClick={onCancel}>X</button>

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
