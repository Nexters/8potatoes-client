import { useCallback, useEffect, useRef, useState } from 'react';

import useIntersectionObserver from '#/hooks/useIntersectionObserver';
import { useGetLocationSearch } from '#/query-hooks/location/query';
import {
    GeolocationCoordinatesType,
    LocationInformationType,
} from '#/types/location';
import { debounce } from '#/utils/common';

interface SearchBoxPropsType {
    onSelect: (location: LocationInformationType) => void;
    onCancel: () => void;
}

function SearchBox({ onSelect, onCancel }: SearchBoxPropsType) {
    const searchInputRef = useRef<HTMLInputElement>(null);

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

    const handleChangeSearchInput = useCallback(
        debounce(() => {
            if (!searchInputRef.current) {
                return;
            }
            setSearchKeyword(searchInputRef.current.value);
        }),
        [],
    );

    return (
        <div>
            <input
                ref={searchInputRef}
                type="text"
                onChange={handleChangeSearchInput}
            />
            <button onClick={onCancel}>X</button>

            {data && (
                <ul style={{ listStyle: 'none' }}>
                    {data.map((item: LocationInformationType) => (
                        <li
                            key={item.pkey}
                            style={{ border: '1px solid black' }}
                            onClick={() => onSelect(item)}
                        >
                            <p>{item.name}</p>
                            <p>{item.lowerBizName}</p>
                            <p>{item.radius}km</p>
                            {item.newAddressList.newAddress.map(
                                (address, idx: number) => (
                                    <p key={idx}>{address.fullAddressRoad}</p>
                                ),
                            )}
                        </li>
                    ))}
                </ul>
            )}
            <div ref={targetRef}></div>
        </div>
    );
}

export default SearchBox;
