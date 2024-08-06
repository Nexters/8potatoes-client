import { useState } from 'react';

import { Drawer } from '#/components/drawer';
import { SEARCH_OPTION } from '#/constants/location';
import { CurrentLocationSearch } from '#/features/location/current-location-search';
import { Route } from '#/features/location/route';
import { SelectedLocationType } from '#/types/location';

type SearchOptionType = (typeof SEARCH_OPTION)[keyof typeof SEARCH_OPTION];

export function LocationSearch() {
    const [routeLocation, setRouteLocation] = useState<
        Record<SearchOptionType, SelectedLocationType | null>
    >({
        origin: null,
        destination: null,
    });
    const [searchOption, setSearchOption] = useState<SearchOptionType | null>(
        null,
    );

    const [isCurrentLocationSearch, setIsCurrentLocationSearch] =
        useState<boolean>(false);

    const handleSelectLocation = (location: SelectedLocationType) => {
        if (!searchOption) {
            return;
        }

        setRouteLocation({ ...routeLocation, [searchOption]: location });
        setSearchOption(null);
        setIsCurrentLocationSearch(false);
    };

    const handleCancelSelect = () => {
        setSearchOption(null);
        setIsCurrentLocationSearch(false);
    };

    return (
        <Drawer>
            {isCurrentLocationSearch ? (
                <CurrentLocationSearch
                    onSelect={handleSelectLocation}
                    onClose={handleCancelSelect}
                />
            ) : (
                <Route
                    routeLocation={routeLocation}
                    onSelect={handleSelectLocation}
                    onClose={handleCancelSelect}
                    setSearchOption={setSearchOption}
                    setRouteLocation={setRouteLocation}
                    setIsCurrentLocationSearch={setIsCurrentLocationSearch}
                />
            )}
        </Drawer>
    );
}
