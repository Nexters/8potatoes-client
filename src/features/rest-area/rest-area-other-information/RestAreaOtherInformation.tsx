import { Text } from '#/components/text';
import { theme } from '#/styles/theme';

import * as S from './RestAreaOtherInformation.style';

const BrandData = [
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
];
const AmenitiesData = [
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
];

export function RestAreaOtherInformation() {
    const handleCopyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <div>
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

                <S.HourList>
                    <S.HourListItem>
                        <Text
                            typography="bodyBold16"
                            color={theme.color.blk[60]}
                        >
                            식당가 (라면/우동)
                        </Text>
                        <Text
                            typography="bodyBold16"
                            color={theme.color.blk[100]}
                        >
                            08:00 - 23:30
                        </Text>
                    </S.HourListItem>
                    <S.HourListItem>
                        <Text
                            typography="bodyBold16"
                            color={theme.color.blk[60]}
                        >
                            식당가 (한식)
                        </Text>
                        <Text
                            typography="bodyBold16"
                            color={theme.color.blk[100]}
                        >
                            08:00 - 23:30
                        </Text>
                    </S.HourListItem>
                </S.HourList>
            </S.Section>

            <S.Divider />

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
                    {BrandData.map((brand) => (
                        <S.FacilityListItem key={brand.title}>
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

            <S.Divider />

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
                    {AmenitiesData.map((amenity) => (
                        <S.FacilityListItem key={amenity.title}>
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

            <S.Divider />

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

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                    }}
                >
                    <S.InformationBox
                        style={{ justifyContent: 'space-between' }}
                    >
                        <div style={{ display: 'flex' }}>
                            <img src="" width={24} height={24} />
                            <Text
                                typography="bodySemiBold16"
                                color={theme.color.blk[100]}
                            >
                                충남 천안시 동남구 쉼1길 42
                            </Text>
                        </div>
                        <img
                            src=""
                            width={24}
                            height={24}
                            onClick={() =>
                                handleCopyToClipboard(
                                    '충남 천안시 동남구 쉼1길 42',
                                )
                            }
                        />
                    </S.InformationBox>
                    <S.InformationBox>
                        <img src="" width={24} height={24} />
                        <Text
                            typography="bodySemiBold16"
                            color={theme.color.blk[100]}
                        >
                            041-441-2480
                        </Text>
                    </S.InformationBox>
                </div>
            </S.Section>

            <S.Description>
                <Text
                    typography="smallTextMedium12"
                    color={theme.color.blk[30]}
                >
                    본 정보는 특정 시점에 수집되어 실제 가격과 다를 수 있습니다.
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
        </div>
    );
}
