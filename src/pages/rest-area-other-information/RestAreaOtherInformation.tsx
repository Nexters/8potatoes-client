import { useParams } from 'react-router-dom';

import CallIcon from '#/assets/icons/call.svg?react';
import CopyIcon from '#/assets/icons/copy.svg?react';
import LocationIcon from '#/assets/icons/location.svg?react';
import { FlexBox } from '#/components/flex-box';
import { Text } from '#/components/text';
import { useGetRestAreaRestStopInfo } from '#/query-hooks/rest-area/query';
import { theme } from '#/styles/theme';
import { handleCopyToClipboard } from '#/utils/common';

import { RestAreaDetailSection } from '../../features/rest-area/rest-area-detail-section';

import * as S from './RestAreaOtherInformation.style';

export function RestAreaOtherInformation() {
    const { restAreaId } = useParams();

    const {
        data: {
            restaurantOperatingTimes,
            brands,
            amenities,
            address,
            phoneNumber,
        },
    } = useGetRestAreaRestStopInfo(restAreaId ?? '');

    return (
        <S.Container gap={8}>
            <RestAreaDetailSection title="영업 시간" iconSrc="" iconAlt="">
                <S.HourList as="ul" gap={12}>
                    {restaurantOperatingTimes.map((restaurant) => (
                        <FlexBox
                            as="li"
                            row
                            flexOption={{ justifyContent: 'space-between' }}
                            key={restaurant.restaurantName}
                        >
                            <Text
                                typography="bodyBold16"
                                color={theme.color.blk[60]}
                            >
                                {restaurant.restaurantName}
                            </Text>
                            <Text
                                typography="bodyBold16"
                                color={theme.color.blk[100]}
                            >
                                {restaurant.operatingTime}
                            </Text>
                        </FlexBox>
                    ))}
                </S.HourList>
            </RestAreaDetailSection>

            <RestAreaDetailSection title="입점 브랜드" iconSrc="" iconAlt="">
                <S.FacilityList>
                    {brands.map((brand) => (
                        <S.FacilityListItem as="li" key={brand.brandName}>
                            <S.Image
                                alt={`${brand.brandName} 브랜드 이미지`}
                                src={brand.brandLogoUrl}
                            />
                            <Text
                                typography="bodySemiBold16"
                                color={theme.color.blk[100]}
                            >
                                {brand.brandName}
                            </Text>
                        </S.FacilityListItem>
                    ))}
                </S.FacilityList>
            </RestAreaDetailSection>

            <RestAreaDetailSection title="편의시설" iconSrc="" iconAlt="">
                <S.FacilityList>
                    {amenities.map((amenity) => (
                        <S.FacilityListItem as="li" key={amenity.amenityName}>
                            <S.Image
                                alt={`${amenity.amenityName} 편의시설 이미지`}
                                src={amenity.amenityLogoUrl}
                            />
                            <Text
                                typography="bodySemiBold16"
                                color={theme.color.blk[100]}
                            >
                                {amenity.amenityName}
                            </Text>
                        </S.FacilityListItem>
                    ))}
                </S.FacilityList>
            </RestAreaDetailSection>

            <RestAreaDetailSection title="기타 정보" iconSrc="" iconAlt="">
                <S.OtherInformationContainer>
                    <S.InformationBox
                        flexOption={{ justifyContent: 'space-between' }}
                    >
                        <FlexBox row gap={12}>
                            <LocationIcon
                                width={24}
                                height={24}
                                fill={theme.color.main[100]}
                            />
                            <Text
                                typography="bodySemiBold16"
                                color={theme.color.blk[100]}
                            >
                                {address}
                            </Text>
                        </FlexBox>

                        <CopyIcon
                            cursor="pointer"
                            width={24}
                            height={24}
                            onClick={() => handleCopyToClipboard(address)}
                        />
                    </S.InformationBox>

                    <a href={`tel:${phoneNumber}`}>
                        <S.InformationBox gap={12}>
                            <CallIcon width={24} height={24} />
                            <Text
                                typography="bodySemiBold16"
                                color={theme.color.blk[100]}
                            >
                                {phoneNumber}
                            </Text>
                        </S.InformationBox>
                    </a>
                </S.OtherInformationContainer>

                <S.Description>
                    <Text
                        typography="smallTextMedium12"
                        color={theme.color.blk[30]}
                    >
                        본 정보는 특정 시점에 수집되어 실제 가격과 다를 수
                        있습니다.
                    </Text>
                    <Text
                        typography="smallTextMedium12"
                        color={theme.color.blk[30]}
                    >
                        제공{' '}
                        <Text
                            as="span"
                            typography="smallTextMedium12"
                            color={theme.color.good[100]}
                        >
                            한국도로공사
                        </Text>
                    </Text>
                </S.Description>
            </RestAreaDetailSection>
        </S.Container>
    );
}
