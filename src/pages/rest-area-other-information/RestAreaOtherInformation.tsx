import CallIcon from '#/assets/icons/call.svg?react';
import CopyIcon from '#/assets/icons/copy.svg?react';
import LocationIcon from '#/assets/icons/location.svg?react';
import { FlexBox } from '#/components/flex-box';
import { Text } from '#/components/text';
import { theme } from '#/styles/theme';
import { handleCopyToClipboard } from '#/utils/common';

import { RestAreaDetailSection } from '../../features/rest-area/rest-area-detail-section';

import * as S from './RestAreaOtherInformation.style';

const data = {
    workingHours: [
        {
            title: '식당가 (라면/우동)',
            hour: '07:00 - 23:00',
        },
        {
            title: '식당가 (한식)',
            hour: '07:00 - 23:30',
        },
    ],
    brands: [
        {
            title: 'BBQ',
            img: 'src',
        },
        {
            title: '파리바게뜨',
            img: 'src',
        },
        {
            title: '코바코',
            img: 'src',
        },
        {
            title: '뚜레쥬르',
            img: 'src',
        },
        {
            title: 'BHC',
            img: 'src',
        },
    ],
    amenities: [
        {
            title: '내고장특산물',
            img: 'src',
        },
        {
            title: '세차장',
            img: 'src',
        },
        {
            title: '약국',
            img: 'src',
        },
        {
            title: '수유실',
            img: 'src',
        },
        {
            title: '화장실',
            img: 'src',
        },
    ],
    address: '충남 천안시 동남구 쉼1길 42',
    cellphone: '041-551-2480',
};

export function RestAreaOtherInformation() {
    const { workingHours, brands, amenities, address, cellphone } = data;

    return (
        <S.Container gap={8}>
            <RestAreaDetailSection title="영업 시간" iconSrc="" iconAlt="">
                <S.HourList as="ul" gap={12}>
                    {workingHours.map((working) => (
                        <FlexBox
                            as="li"
                            row
                            flexOption={{ justifyContent: 'space-between' }}
                            key={working.title}
                        >
                            <Text
                                typography="bodyBold16"
                                color={theme.color.blk[60]}
                            >
                                {working.title}
                            </Text>
                            <Text
                                typography="bodyBold16"
                                color={theme.color.blk[100]}
                            >
                                {working.hour}
                            </Text>
                        </FlexBox>
                    ))}
                </S.HourList>
            </RestAreaDetailSection>

            <RestAreaDetailSection title="입점 브랜드" iconSrc="" iconAlt="">
                <S.FacilityList>
                    {brands.map((brand) => (
                        <S.FacilityListItem as="li" key={brand.title}>
                            <S.Image
                                alt={`${brand.title} 브랜드 이미지`}
                                src={brand.img}
                            />
                            <Text
                                typography="bodySemiBold16"
                                color={theme.color.blk[100]}
                            >
                                {brand.title}
                            </Text>
                        </S.FacilityListItem>
                    ))}
                </S.FacilityList>
            </RestAreaDetailSection>

            <RestAreaDetailSection title="편의시설" iconSrc="" iconAlt="">
                <S.FacilityList>
                    {amenities.map((amenity) => (
                        <S.FacilityListItem as="li" key={amenity.title}>
                            <S.Image
                                alt={`${amenity.title} 편의시설 이미지`}
                                src={amenity.img}
                            />
                            <Text
                                typography="bodySemiBold16"
                                color={theme.color.blk[100]}
                            >
                                {amenity.title}
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

                    <a href={`tel:${cellphone}`}>
                        <S.InformationBox gap={12}>
                            <CallIcon width={24} height={24} />
                            <Text
                                typography="bodySemiBold16"
                                color={theme.color.blk[100]}
                            >
                                {cellphone}
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
