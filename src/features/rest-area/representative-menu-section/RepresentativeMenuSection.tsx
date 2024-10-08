import { useEffect, useState } from 'react';

import { useMotionValue, useSpring, useTransform } from 'framer-motion';

import AlternativeImage from '#/assets/images/alternative-image.png';
import { FlexBox } from '#/components/flex-box';
import { Text } from '#/components/text';
import { useGetRestAreaMenuInfo } from '#/query-hooks/rest-area/query';
import { theme } from '#/styles/theme';

import * as S from './RepresentativeMenuSection.style';

export const RepresentativeMenuSection = () => {
    const {
        data: { representativeMenuData },
    } = useGetRestAreaMenuInfo();

    const isNeedPagination = representativeMenuData.length > 1;
    const selectedMenuIndex = useMotionValue(0);
    const rawTranslateX = useTransform(selectedMenuIndex, [0, 1], [0, -375]);
    const translateX = useSpring(rawTranslateX, {
        stiffness: 300,
        damping: 30,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        selectedMenuIndex.on('change', (latest) => setSelectedIndex(latest));
    }, [selectedMenuIndex]);

    return (
        <S.Container>
            <S.BestMenuContainer row style={{ translateX }}>
                {representativeMenuData.map(
                    (
                        {
                            representativeMenuDescription,
                            representativeMenuImageUrl,
                            representativeMenuName,
                            representativeMenuPrice,
                        },
                        index,
                    ) => (
                        <S.BestMenuSection
                            isNeedPagination={isNeedPagination}
                            key={`representative_${index + 1}`}
                        >
                            <Text
                                typography="headingBold20"
                                color={theme.color.blk[100]}
                            >
                                오직 이곳에서만 먹을 수 있는
                            </Text>
                            <S.BestMenuImage
                                alt="베스트 메뉴 이미지"
                                src={representativeMenuImageUrl}
                                onError={(event) => {
                                    event.currentTarget.src = AlternativeImage;
                                }}
                            />
                            <FlexBox gap={16}>
                                <FlexBox gap={8}>
                                    <S.Description
                                        typography="bodyMedium16"
                                        color={theme.color.blk[40]}
                                    >
                                        {representativeMenuDescription}
                                    </S.Description>
                                    <Text
                                        typography="headingBold18"
                                        color={theme.color.blk[100]}
                                    >
                                        {representativeMenuName}
                                    </Text>
                                </FlexBox>
                                <Text
                                    typography="bodySemiBold16"
                                    color={theme.color.blk[60]}
                                >
                                    {representativeMenuPrice.toLocaleString()}원
                                </Text>
                            </FlexBox>
                        </S.BestMenuSection>
                    ),
                )}
            </S.BestMenuContainer>
            {isNeedPagination ? (
                <S.PaginationSection row gap={10}>
                    <FlexBox row gap={10}>
                        {representativeMenuData.map((_, index) => (
                            <S.PaginationIcon
                                key={`pagination_${index + 1}`}
                                isActive={selectedIndex === index}
                                onClick={() => selectedMenuIndex.set(index)}
                            />
                        ))}
                    </FlexBox>
                </S.PaginationSection>
            ) : null}
        </S.Container>
    );
};
