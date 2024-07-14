import { useCallback, useEffect, useRef, useState } from 'react';

import { useInfiniteQuery } from '@tanstack/react-query';

import { getLocationSearchData } from '#/apis/tmap';
import {
    GeolocationCoordinatesType,
    LocationInformationType,
} from '#/types/location';
import { debounce } from '#/utils/common';

function LocationSearch() {
    const searchInputRef = useRef<HTMLInputElement>(null);
    const lastItemRef = useRef<HTMLDivElement>(null);

    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [geolocationCoordinates, setGeolocationCoordinates] =
        useState<GeolocationCoordinatesType>({ latitude: 0, longitude: 0 });

    const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
        queryKey: ['search', searchKeyword],
        queryFn: ({ pageParam = 1 }) =>
            getLocationSearchData({
                page: pageParam,
                searchKeyword,
                centerLat: geolocationCoordinates.latitude,
                centerLon: geolocationCoordinates.longitude,
                appKey: import.meta.env.VITE_TMAP_APP_KEY,
            }),
        initialPageParam: 1,
        select: ({ pages }) =>
            pages.reduce(
                (acc, val) => [...acc, ...val.searchPoiInfo.pois.poi],
                [] as LocationInformationType[],
            ),
        getNextPageParam: (lastPage) => {
            const {
                searchPoiInfo: { page, count, totalCount },
            } = lastPage;
            return page * count >= totalCount ? undefined : page + 1;
        },
        enabled: !!searchKeyword,
    });

    useEffect(() => {
        function handleSuccess(position: GeolocationPosition) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            setGeolocationCoordinates({ latitude, longitude });
        }

        navigator.geolocation.getCurrentPosition(handleSuccess);
    }, []);
    useEffect(() => {
        if (!lastItemRef.current) {
            return;
        }

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback);
        observer.observe(lastItemRef.current);

        return () => {
            if (!lastItemRef.current) {
                return;
            }
            observer.unobserve(lastItemRef.current);
        };
    }, [fetchNextPage, hasNextPage]);

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

            {data && (
                <ul style={{ listStyle: 'none' }}>
                    {data.map((item: LocationInformationType) => (
                        <li
                            key={item.pkey}
                            style={{ border: '1px solid black' }}
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
            <div ref={lastItemRef}></div>
        </div>
    );
}

export default LocationSearch;
