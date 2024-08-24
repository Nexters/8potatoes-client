import { RestAreaFuelInformation } from '#/features/rest-area/rest-area-fuel-information';
import { RestAreaParkingInformation } from '#/features/rest-area/rest-area-parking-information';
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
            <RestAreaFuelInformation
                gasolinePrice={fuel.gasolinePrice}
                dieselPrice={fuel.dieselPrice}
                lpgPrice={fuel.lpgPrice}
                isElectricChargingStation={fuel.isElectricChargingStation}
                isHydrogenChargingStation={fuel.isHydrogenChargingStation}
            />
            <RestAreaParkingInformation
                smallCarSpace={parking.smallCarSpace}
                largeCarSpace={parking.largeCarSpace}
                disabledPersonSpace={parking.disabledPersonSpace}
                totalSpace={parking.totalSpace}
                updateDate={parking.updateDate}
            />
        </S.Container>
    );
};
