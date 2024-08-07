import FolkSpoonIcon from '#/assets/icons/folk-spoon.svg?react';
import StarIcon from '#/assets/icons/star.svg?react';
import { Text } from '#/components/text';
import { theme } from '#/styles/theme';
import dayjs from '#/utils/dayjs';

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
    closeDate,
}: RestAreaInformationProps) => {
    const isRestAreaOpen = dayjs().isBetween(openDate, closeDate);

    return (
        <S.Container>
            <S.TopSection>
                <S.RestAreaSection>
                    <Text typography='headingBold18'>{`${restAreaName} 휴게소`}</Text>
                    <S.DetailSection>
                        <Text color={theme.color.blk[60]} typography='smallTextMedium12'>{`${direction} 방향`}</Text>
                        <S.Divider />
                        <S.NaverRating>
                            <Text typography='smallTextBold12'>네이버 평점</Text>
                            <StarIcon width={12} height={12} />
                            <Text typography='smallTextBold12'>{naverRating}</Text>
                        </S.NaverRating>
                    </S.DetailSection>
                </S.RestAreaSection>
                <S.OpenStateBadge isRestAreaOpen={isRestAreaOpen}>
                    <FolkSpoonIcon width={16} height={16} />
                    <Text typography="smallTextBold12">{`식당 영업${isRestAreaOpen ? '중' : '끝'}`}</Text>
                </S.OpenStateBadge>
            </S.TopSection>
            <S.BottomSection>
                <Text typography='bodyMedium14' color={theme.color.blk[40]}>휘발유</Text>
                <Text typography='bodySemiBold14' color={theme.color.blk[100]}>{gasolinePrice}</Text>
                <Text typography='bodyMedium14' color={theme.color.blk[40]}>경유</Text>
                <Text typography='bodySemiBold14' color={theme.color.blk[100]}>{dieselPrice}</Text>
            </S.BottomSection>
        </S.Container>
    );
};
