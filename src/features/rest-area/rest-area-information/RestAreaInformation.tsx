import dayjs from '#/utils/dayjs';

import StarIcon from '#/assets/icons/star.svg?react';
import FolkSpoonIcon from '#/assets/icons/folk-spoon.svg?react';


import * as S from './RestAreaInformation.style';

interface RestAreaInformationProps {
    restAreaName: string;
    direction: string;
    naverRating: number;
    gasolinePrice: number;
    dieselPrice: number;
    menuAmount: number;
    openDate: Date;
    closeDate: Date;
}

export const RestAreaInformation = ({
    restAreaName,
    direction,
    naverRating,
    gasolinePrice,
    dieselPrice,
    menuAmount,
    openDate,
    closeDate
}: RestAreaInformationProps) => {

    const isRestAreaOpen = dayjs().isBetween(openDate, closeDate);

    return (
        <S.Container>
            <S.TopSection>
                <S.RestAreaSection>
                    <S.DetailSection>

                    </S.DetailSection>
                    <S.OpenStateBadge isRestAreaOpen={isRestAreaOpen}>

                    </S.OpenStateBadge>
                </S.RestAreaSection>
            </S.TopSection>
            <S.BottomSection>

            </S.BottomSection>
        </S.Container>
    )

}