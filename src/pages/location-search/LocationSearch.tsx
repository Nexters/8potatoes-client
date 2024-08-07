import { useState } from 'react';

import { Drawer } from '#/components/drawer';
import { SEARCH_OPTION } from '#/constants/location';
import { CurrentLocationSearch } from '#/features/location/current-location-search';
import { Route } from '#/features/location/route';
import { Search } from '#/features/location/search';
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

    const handleOpenCurrentLocation = () => {
        // Drawer 닫기 로직
        setIsCurrentLocationSearch(true);
    };

    const handleCancelSelect = () => {
        setSearchOption(null);
        setIsCurrentLocationSearch(false);
    };

    const handleCloseCurrentLocation = () => {
        // Drawer 열기 로직
        setIsCurrentLocationSearch(false);
    };

    return (
        <Drawer>
            {isCurrentLocationSearch ? (
                <CurrentLocationSearch
                    onSelect={handleSelectLocation}
                    onClose={handleCloseCurrentLocation}
                />
            ) : (
                <Route
                    routeLocation={routeLocation}
                    setSearchOption={setSearchOption}
                    setRouteLocation={setRouteLocation}
                />
            )}

            <Drawer.Content heightStepList={[{ value: 90, unit: 'dvh' }]}>
                <Search
                    onSelect={handleSelectLocation}
                    onClose={handleCancelSelect}
                    handleOpenCurrentLocation={handleOpenCurrentLocation}
                />
            </Drawer.Content>
        </Drawer>
    );
}
