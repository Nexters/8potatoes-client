import CallIcon from '#/assets/icons/call.svg?react';
import CopyIcon from '#/assets/icons/copy.svg?react';
import LocationIcon from '#/assets/icons/location.svg?react';
import { FlexBox } from '#/components/flex-box';
import { Text } from '#/components/text';
import { theme } from '#/styles/theme';
import { handleCopyToClipboard } from '#/utils/common';

import * as S from './RestAreaOtherInformation.style';

interface RestAreaOtherInformationProps {
    otherInformation: {
        workingHours: {
            title: string;
            hour: string;
        }[];
        brands: {
            title: string;
            img: string;
        }[];
        amenities: {
            title: string;
            img: string;
        }[];
        address: string;
        cellphone: string;
    };
}

export function RestAreaOtherInformation({
    otherInformation,
}: RestAreaOtherInformationProps) {
    const { workingHours, brands, amenities, address, cellphone } =
        otherInformation;

    return (
        <S.Container gap={8}>
            <S.Section>
                <S.Title>
                    <img
                        alt="영업 시간 표시 아이콘"
                        src=""
                        width={24}
                        height={24}
                    />
                    <Text
                        typography="headingBold20"
                        color={theme.color.blk[100]}
                    >
                        영업 시간
                    </Text>
                </S.Title>

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
            </S.Section>

            <S.Section>
                <S.Title>
                    <img
                        alt="입점 브랜드 표시 아이콘"
                        src=""
                        width={24}
                        height={24}
                    />
                    <Text
                        typography="headingBold20"
                        color={theme.color.blk[100]}
                    >
                        입점 브랜드
                    </Text>
                </S.Title>

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
            </S.Section>

            <S.Section>
                <S.Title>
                    <img
                        alt="편의시설 표시 아이콘"
                        src=""
                        width={24}
                        height={24}
                    />
                    <Text
                        typography="headingBold20"
                        color={theme.color.blk[100]}
                    >
                        편의시설
                    </Text>
                </S.Title>

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
            </S.Section>

            <S.Section>
                <S.Title>
                    <img
                        alt="기타 정보 표시 아이콘"
                        src=""
                        width={24}
                        height={24}
                    />
                    <Text
                        typography="headingBold20"
                        color={theme.color.blk[100]}
                    >
                        기타 정보
                    </Text>
                </S.Title>

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
            </S.Section>
        </S.Container>
    );
}
