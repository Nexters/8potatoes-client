import { useNavigate } from 'react-router-dom';

import FolkSpoonIcon from '#/assets/icons/folk-spoon.svg?react';
import MarkerFlagIcon from '#/assets/icons/marker-flag.svg?react';
import StarIcon from '#/assets/icons/star.svg?react';
import { FlexBox } from '#/components/flex-box';
import { Text } from '#/components/text';
import { theme } from '#/styles/theme';
import type { RestAreaDetailAtHighwayType } from '#/types/rest-area';

import * as S from './RestAreaInformation.style';

interface RestAreaInformationProps extends RestAreaDetailAtHighwayType {}

const CenterRestAreaBanner = () => (
    <S.BannerContainer row gap={8}>
        <MarkerFlagIcon color={theme.color.main[100]} width={16} height={16} />
        <Text typography="smallTextBold12" color={theme.color.main[100]}>
            중간 지점에 위치한 최고의 휴식 장소
        </Text>
    </S.BannerContainer>
);

export const RestAreaInformation = ({
    name,
    code,
    direction,
    isOperating,
    gasolinePrice,
    dieselPrice,
    naverRating,
    foodMenusCount,
    isRecommend,
}: RestAreaInformationProps) => {
    const navigate = useNavigate();

    const handleClickRestArea = () => {
        navigate(`/rest-area/${code}/foods`);
    };

    return (
        <S.Container onClick={handleClickRestArea}>
            {isRecommend && <CenterRestAreaBanner />}
            <FlexBox row gap={20}>
                <FlexBox gap={[8, 0]} flexOption={{ flexGrow: 1 }}>
                    <Text typography="headingBold18">{name}</Text>
                    <FlexBox row flexOption={{ alignItems: 'center' }}>
                        {direction && (
                            <>
                                <Text
                                    color={theme.color.blk[60]}
                                    typography="smallTextMedium12"
                                >{`${direction} 방향`}</Text>
                                <S.Divider />
                            </>
                        )}
                        <S.NaverRating row gap={2}>
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
                <S.OpenStateBadge isOperating={isOperating}>
                    <FolkSpoonIcon width={16} height={16} />
                    <Text typography="smallTextBold12">{`식당 영업${isOperating ? '중' : '끝'}`}</Text>
                </S.OpenStateBadge>
            </FlexBox>
            <S.BottomSection row gap={8}>
                <FlexBox
                    row
                    gap={4}
                    flexOption={{ alignItems: 'center', flexGrow: 1 }}
                >
                    <Text typography="bodyMedium14" color={theme.color.blk[40]}>
                        휘발유
                    </Text>
                    <S.PriceText 
                        isExist={!!gasolinePrice}
                        typography="bodySemiBold14"
                    >
                        {gasolinePrice ?? '-'}
                    </S.PriceText>
                </FlexBox>
                <FlexBox
                    row
                    gap={4}
                    flexOption={{ alignItems: 'center', flexGrow: 1 }}
                >
                    <Text typography="bodyMedium14" color={theme.color.blk[40]}>
                        경유
                    </Text>
                    <S.PriceText 
                        isExist={!!gasolinePrice}
                        typography="bodySemiBold14"
                    >
                        {dieselPrice ?? '-'}
                    </S.PriceText>
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
                        {foodMenusCount}가지
                    </Text>
                </FlexBox>
            </S.BottomSection>
        </S.Container>
    );
};
