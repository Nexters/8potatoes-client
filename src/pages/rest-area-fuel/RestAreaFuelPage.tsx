import { AsyncBoundary } from '#/components/async-boundary';
import {
    RestAreaFuelInformation,
    RestAreaFuelInformationLoading,
} from '#/features/rest-area/rest-area-fuel-information';
import {
    RestAreaParkingInformation,
    RestAreaParkingInformationLoading,
} from '#/features/rest-area/rest-area-parking-information';
import {
    useGetRestAreaGasStationInfo,
    useGetRestAreaParkingInfo,
} from '#/query-hooks/rest-area/query';

import * as S from './RestAreaFuelPage.style';

export const RestAreaFuelPage = () => {
    const { data: fuel } = useGetRestAreaGasStationInfo();
    const { data: parking } = useGetRestAreaParkingInfo();

    return (
        <S.Container gap={8}>
            <AsyncBoundary pendingFallback={<RestAreaFuelInformationLoading />}>
                <RestAreaFuelInformation
                    gasolinePrice={fuel.gasolinePrice}
                    dieselPrice={fuel.dieselPrice}
                    lpgPrice={fuel.lpgPrice}
                    isElectricChargingStation={fuel.isElectricChargingStation}
                    isHydrogenChargingStation={fuel.isHydrogenChargingStation}
                />
            </AsyncBoundary>
            <AsyncBoundary
                pendingFallback={<RestAreaParkingInformationLoading />}
            >
                <RestAreaParkingInformation
                    smallCarSpace={parking.smallCarSpace}
                    largeCarSpace={parking.largeCarSpace}
                    disabledPersonSpace={parking.disabledPersonSpace}
                    totalSpace={parking.totalSpace}
                    updateDate={parking.updateDate}
                />
            </AsyncBoundary>
        </S.Container>
    );
};
