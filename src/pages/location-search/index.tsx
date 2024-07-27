import { useState } from 'react';

import SearchBox from '#/features/location/search-box';
import { LocationInformationType } from '#/types/location';

const SEARCH_OPTION = {
    ORIGIN: 'origin',
    DESTINATION: 'destination',
};
type SearchOptionType = (typeof SEARCH_OPTION)[keyof typeof SEARCH_OPTION];

function LocationSearch() {
    const [routeLocation, setRouteLocation] = useState<
        Record<SearchOptionType, LocationInformationType | null>
    >({
        origin: null,
        destination: null,
    });
    const [searchType, setSearchType] = useState<SearchOptionType | null>(null);

    const handleClickLabel = (searchType: SearchOptionType) => {
        setSearchType(searchType);
    };

    const handleSelectLocation = (location: LocationInformationType) => {
        if (!searchType) {
            return;
        }

        setRouteLocation({ ...routeLocation, [searchType]: location });
        setSearchType(null);
    };

    const handleCancelSelect = () => {
        setSearchType(null);
    };

    return (
        <div>
            {searchType !== null ? (
                <SearchBox
                    onSelect={handleSelectLocation}
                    onCancel={handleCancelSelect}
                />
            ) : (
                <>
                    <div
                        style={{ padding: '8px' }}
                        onClick={() => handleClickLabel(SEARCH_OPTION.ORIGIN)}
                    >
                        <p>
                            {routeLocation.origin?.name ??
                                '출발지를 선택해주세요'}
                        </p>
                    </div>
                    <div
                        style={{ padding: '8px' }}
                        onClick={() =>
                            handleClickLabel(SEARCH_OPTION.DESTINATION)
                        }
                    >
                        <p>
                            {routeLocation.destination?.name ??
                                '도착지를 선택해주세요'}
                        </p>
                    </div>
                    <button>Continue</button>
                </>
            )}
        </div>
    );
}

export default LocationSearch;
