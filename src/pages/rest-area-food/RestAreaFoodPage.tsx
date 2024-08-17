import { useRef, useState } from 'react';

import AlternativeImage from '#/assets/images/alternative-image.png';
import { FlexBox } from '#/components/flex-box';
import { Text } from '#/components/text';
import { RestAreaDetailSection } from '#/features/rest-area/rest-area-detail-section';
import { RestAreaFoodCategory } from '#/features/rest-area/rest-area-food-category';
import { RestAreaFoodMenu } from '#/features/rest-area/rest-area-food-menu';
import { useDisclosure } from '#/hooks/useDisclosure';
import useIntersectionObserver from '#/hooks/useIntersectionObserver';
import useValidatedSearchParams from '#/hooks/useValidSearchParams';
import { theme } from '#/styles/theme';

import * as S from './RestAreaFoodPage.style';

const FOOD_MENUS = [
    {
        name: '소미미단팥빵',
        price: 10000,
        isSignature: true,
        isPopular: true,
    },
    {
        name: '맥반석오징어구이',
        price: 3000,
        isPopular: true,
    },
    {
        name: '호도과자',
        price: 3000,
        isSignature: true,
    },
    { name: '야채핫바', price: 3500 },
];

const BEST_MENU = {
    description: '제철나물, 순창고추장을 넣어 고급스럽게 구성한',
    name: '보은대추왕갈비탕',
    price: 18000,
};

export const RestAreaFoodPage = () => {
    const contentRef = useRef<HTMLDivElement | null>(null);

    const { state: isCategoryStickey, toggle: toggleCategoryStickey } =
        useDisclosure(false);

    const { targetRef } = useIntersectionObserver<HTMLDivElement>({
        onIntersect: (isIntersect) => isIntersect && toggleCategoryStickey(),
        root: contentRef.current,
        enabled: true,
    });

    useValidatedSearchParams({
        paramName: 'category',
        expectedValue: [
            '전체',
            '추천',
            '스낵',
            '양식',
            '중식',
            '한식',
            '아시안',
        ],
        defaultValue: '전체',
        checkIfNull: true,
    });

    const totalMenuAmount = FOOD_MENUS.length;

    return (
        <S.Container gap={8} ref={contentRef}>
            <S.BestMenuSection>
                <Text typography="headingBold20" color={theme.color.blk[100]}>
                    오직 이곳에서만 먹을 수 있는
                </Text>
                <S.BestMenuImage
                    alt="베스트 메뉴 이미지"
                    src={AlternativeImage}
                />
                <FlexBox gap={20}>
                    <FlexBox gap={8}>
                        <Text
                            typography="bodyMedium16"
                            color={theme.color.blk[80]}
                        >
                            {BEST_MENU.description}
                        </Text>
                        <Text
                            typography="headingBold18"
                            color={theme.color.blk[100]}
                        >
                            {BEST_MENU.name}
                        </Text>
                    </FlexBox>
                    <Text
                        typography="bodySemiBold16"
                        color={theme.color.blk[90]}
                    >
                        {BEST_MENU.price.toLocaleString()}원
                    </Text>
                </FlexBox>
            </S.BestMenuSection>
            <S.MenuSection>
                <RestAreaDetailSection
                    title="전체 메뉴"
                    iconSrc=""
                    iconAlt="전체 메뉴 아이콘"
                    description={`${totalMenuAmount}개의 메뉴`}
                >
                    <RestAreaFoodCategory ref={targetRef} />
                </RestAreaDetailSection>
                <S.MenuWrapper>
                    <FlexBox gap={40}>
                        <RestAreaFoodMenu title="추천" menus={FOOD_MENUS} />
                        <RestAreaFoodMenu title="스낵" menus={FOOD_MENUS} />
                    </FlexBox>
                </S.MenuWrapper>
            </S.MenuSection>
        </S.Container>
    );
};
