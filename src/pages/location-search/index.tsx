import { useState } from 'react';

import ArrowSwitchHorizontalIcon from '#/assets/icons/arrow-switch-horizontal.svg?react';
import RouteIcon from '#/assets/icons/route.svg?react';
import LocationSelectField from '#/features/location/location-select-field';
import Search from '#/features/location/search';
import Contents from '#/pages/templates/contents';
import { SelectedLocationType } from '#/types/location';

import * as S from './index.style';

const SEARCH_OPTION = {
    ORIGIN: 'origin',
    DESTINATION: 'destination',
};
type SearchOptionType = (typeof SEARCH_OPTION)[keyof typeof SEARCH_OPTION];

function LocationSearch() {
    const [routeLocation, setRouteLocation] = useState<
        Record<SearchOptionType, SelectedLocationType | null>
    >({
        origin: null,
        destination: null,
    });
    const [searchType, setSearchType] = useState<SearchOptionType | null>(null);

    const isSelectedOrigin = !!routeLocation.origin;
    const isSelectedDestination = !!routeLocation.destination;

    const handleClickLabel = (searchType: SearchOptionType) => {
        setSearchType(searchType);
    };

    const handleSelectLocation = (location: SelectedLocationType) => {
        if (!searchType) {
            return;
        }

        setRouteLocation({ ...routeLocation, [searchType]: location });
        setSearchType(null);
    };

    const handleCancelSelect = () => {
        setSearchType(null);
    };

    const handleSwitchLocation = () => {
        if (isSelectedOrigin && isSelectedDestination) {
            const origin = {
                ...routeLocation.origin,
            } as SelectedLocationType;
            const destination = {
                ...routeLocation.destination,
            } as SelectedLocationType;

            setRouteLocation({ origin: destination, destination: origin });
        }
    };

    return (
        <>
            {searchType !== null ? (
                <Search
                    onSelect={handleSelectLocation}
                    onClose={handleCancelSelect}
                />
            ) : (
                <S.Container>
                    <img src="" style={{ width: '100vw', height: '327px' }} />

                    <Contents style={{ marginTop: '40px' }}>
                        <S.Title>
                            쥬쥬와 함께
                            <br />
                            휴게소 맛집을 찾아보세요!
                        </S.Title>

                        <S.RouteContainer>
                            <RouteIcon />

                            <S.Location>
                                <LocationSelectField
                                    handleClick={() =>
                                        handleClickLabel(SEARCH_OPTION.ORIGIN)
                                    }
                                    label="출발지 입력"
                                    placeholder="출발지를 선택해주세요"
                                    isSelected={isSelectedOrigin}
                                    locationName={
                                        routeLocation.origin?.addressName
                                    }
                                />

                                <S.BorderLine />

                                <LocationSelectField
                                    handleClick={() =>
                                        handleClickLabel(
                                            SEARCH_OPTION.DESTINATION,
                                        )
                                    }
                                    label="도착지 입력"
                                    placeholder="도착지를 선택해주세요"
                                    isSelected={isSelectedDestination}
                                    locationName={
                                        routeLocation.destination?.addressName
                                    }
                                />
                            </S.Location>

                            <button onClick={handleSwitchLocation}>
                                <ArrowSwitchHorizontalIcon
                                    stroke={
                                        isSelectedOrigin &&
                                        isSelectedDestination
                                            ? '#FF7512'
                                            : '#FFD6B8'
                                    }
                                />
                            </button>
                        </S.RouteContainer>

                        <button>검색</button>
                    </Contents>
                </S.Container>
            )}
        </>
    );
}

export default LocationSearch;
