import FolkSpoonIcon from '#/assets/icons/folk-spoon.svg?react';
import MarkerFlagIcon from '#/assets/icons/marker-flag.svg?react';
import StarIcon from '#/assets/icons/star.svg?react';
import { FlexBox } from '#/components/flex-box';
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
    isCenter?: boolean;
}

const CenterRestAreaBanner = () => (
    <S.BannerContainer row gap={8}>
        <MarkerFlagIcon color={theme.color.main[100]} width={16} height={16} />
        <Text typography="smallTextBold12" color={theme.color.main[100]}>
            중간 지점에 위치한 최고의 휴식 장소
        </Text>
    </S.BannerContainer>
);

export const RestAreaInformation = ({
    restAreaName,
    direction,
    naverRating,
    gasolinePrice,
    dieselPrice,
    menuAmount,
    openDate,
    closeDate,
    isCenter,
}: RestAreaInformationProps) => {
    const isRestAreaOpen = dayjs().isBetween(openDate, closeDate);

    return (
        <S.Container>
            <FlexBox row gap={20}>
                {isCenter && <CenterRestAreaBanner />}
                <FlexBox gap={[8, 0]} flexOption={{ flexGrow: 1 }}>
                    <Text typography="headingBold18">{`${restAreaName} 휴게소`}</Text>
                    <FlexBox row flexOption={{ alignItems: 'center' }}>
                        <Text
                            color={theme.color.blk[60]}
                            typography="smallTextMedium12"
                        >{`${direction} 방향`}</Text>
                        <S.Divider />
                        <S.NaverRating
                            row
                            gap={2}
                        >
                            <Text typography="smallTextBold12">
                                네이버 평점
                            </Text>
                            <StarIcon width={12} height={12} />
                            <Text typography="smallTextBold12">
                                {naverRating}
                            </Text>
                        </S.NaverRating>
                    </FlexBox>
                </FlexBox>
                <S.OpenStateBadge isRestAreaOpen={isRestAreaOpen}>
                    <FolkSpoonIcon width={16} height={16} />
                    <Text typography="smallTextBold12">{`식당 영업${isRestAreaOpen ? '중' : '끝'}`}</Text>
                </S.OpenStateBadge>
            </FlexBox>
            <S.BottomSection
                row
                gap={8}
            >
                <FlexBox row gap={4} flexOption={{ alignItems: 'center' }}>
                    <Text typography="bodyMedium14" color={theme.color.blk[40]}>
                        휘발유
                    </Text>
                    <Text
                        typography="bodySemiBold14"
                        color={theme.color.blk[100]}
                    >
                        {gasolinePrice.toLocaleString('en-US')}원
                    </Text>
                </FlexBox>
                <FlexBox row gap={4} flexOption={{ alignItems: 'center' }}>
                    <Text typography="bodyMedium14" color={theme.color.blk[40]}>
                        경유
                    </Text>
                    <Text
                        typography="bodySemiBold14"
                        color={theme.color.blk[100]}
                    >
                        {dieselPrice.toLocaleString('en-US')}원
                    </Text>
                </FlexBox>
                <S.Divider />
                <FlexBox row gap={4} flexOption={{ alignItems: 'center' }}>
                    <Text typography="bodyMedium14" color={theme.color.blk[40]}>
                        메뉴
                    </Text>
                    <Text
                        typography="bodySemiBold14"
                        color={theme.color.blk[100]}
                    >
                        {menuAmount}가지
                    </Text>
                </FlexBox>
            </S.BottomSection>
        </S.Container>
    );
};
