import { RestAreaFuelInformationLoading } from '#/features/rest-area/rest-area-fuel-information';
import { RestAreaParkingInformationLoading } from '#/features/rest-area/rest-area-parking-information';

import * as S from './RestAreaFuelPage.style';

export const RestAreaFuelPageLoading = () => (
    <S.Container gap={8}>
        <RestAreaFuelInformationLoading />
        <RestAreaParkingInformationLoading />
    </S.Container>
);
