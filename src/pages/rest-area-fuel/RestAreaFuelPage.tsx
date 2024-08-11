import { RestAreaFuelInformation } from '#/features/rest-area/rest-area-fuel-information';
import { RestAreaParkingInformation } from '#/features/rest-area/rest-area-parking-information';

import * as S from './RestAreaFuelPage.style';

const RestAreaInformation = {
    fuel: {
        gasolinePrice: 1234,
        dieselPrice: 1522,
        lpgPrice: 978,
    },
    parking: {
        smallSizeParking: 236,
        largeSizeParking: 23,
        disabledOnlyParking: 12,
        updatedInformationAt: new Date('2024-08-11'),
    },
};

export const RestAreaFuelPage = () => {
    const { fuel, parking } = RestAreaInformation;

    return (
        <S.Container gap={8}>
            <RestAreaFuelInformation
                gasolinePrice={fuel.gasolinePrice}
                dieselPrice={fuel.dieselPrice}
                lpgPrice={fuel.lpgPrice}
            />
            <RestAreaParkingInformation 
                    smallSizeParking={parking.smallSizeParking}
                    largeSizeParking={parking.largeSizeParking}
                    disabledOnlyParking={parking.disabledOnlyParking}
                    updatedInformationAt={parking.updatedInformationAt}
            />
        </S.Container>
    );
};
