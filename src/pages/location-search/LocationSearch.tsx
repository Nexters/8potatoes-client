import { useState } from 'react';

import { flushSync } from 'react-dom';

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

    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    const [isCurrentLocationSearch, setIsCurrentLocationSearch] =
        useState<boolean>(false);

    const handleSelectLocation = (location: SelectedLocationType) => {
        if (!searchOption) {
            return;
        }

        setIsDrawerOpen(false);
        setRouteLocation({ ...routeLocation, [searchOption]: location });
        setSearchOption(null);
        setIsCurrentLocationSearch(false);
    };

    const handleOpenCurrentLocation = () => {
        flushSync(() => setIsDrawerOpen(false));
        setIsCurrentLocationSearch(true);
    };

    const handleCancelSelect = () => {
        setIsDrawerOpen(false);
        setSearchOption(null);
        setIsCurrentLocationSearch(false);
    };

    const handleCloseCurrentLocation = () => {
        setIsDrawerOpen(true);
        setIsCurrentLocationSearch(false);
    };

    return (
        <Drawer isDrawerOpen={isDrawerOpen} setDrawerOpen={setIsDrawerOpen}>
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

            <Drawer.Content heightStepList={[{ value: 95, unit: 'dvh' }]}>
                <Search
                    onSelect={handleSelectLocation}
                    onClose={handleCancelSelect}
                    handleOpenCurrentLocation={handleOpenCurrentLocation}
                />
            </Drawer.Content>
        </Drawer>
    );
}
