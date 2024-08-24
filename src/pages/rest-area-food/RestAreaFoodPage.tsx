import { useEffect, useRef } from 'react';

import { useOutletContext, useSearchParams } from 'react-router-dom';

import MenuIcon from '#/assets/icons/menu.svg?react';
import { FlexBox } from '#/components/flex-box';
import { FOOD_CATEGORY_ORDER } from '#/constants/food-menu';
import { RepresentativeMenuSection } from '#/features/rest-area/representative-menu-section';
import { RestAreaDetailSection } from '#/features/rest-area/rest-area-detail-section';
import { RestAreaFoodCategory } from '#/features/rest-area/rest-area-food-category';
import { RestAreaFoodMenu } from '#/features/rest-area/rest-area-food-menu';
import useValidatedSearchParams from '#/hooks/useValidSearchParams';
import type { RestAreaDetailOutletContextType } from '#/pages/templates/rest-area-detail';
import { useGetRestAreaMenuInfo } from '#/query-hooks/rest-area/query';

import * as S from './RestAreaFoodPage.style';

export const RestAreaFoodPage = () => {
    const [searchParam] = useSearchParams();
    const selectedCategory = searchParam.get('category') ?? '추천';

    const menuListRef = useRef<Map<string, HTMLDivElement>>(new Map());
    const { contentRef } =
        useOutletContext<RestAreaDetailOutletContextType>();

    const {
        data: { totalMenuCount, recommendedMenuData, normalMenuData },
    } = useGetRestAreaMenuInfo();

    const availableMenuCategory = Array.from(normalMenuData.keys()).toSorted(
        (a, b) =>
            FOOD_CATEGORY_ORDER.indexOf(a) - FOOD_CATEGORY_ORDER.indexOf(b),
    );

    useValidatedSearchParams({
        paramName: 'category',
        expectedValue: ['추천', ...availableMenuCategory],
        defaultValue: '추천',
        checkIfNull: true,
    });

    useEffect(() => {
        const menuElement = menuListRef.current.get(selectedCategory);
        const contentElement = contentRef.current;

        if (menuElement && contentElement) {
            const menuElementPosition = menuElement.getBoundingClientRect().top;
            const scrollOffset = menuElementPosition - 120;

            console.log(contentElement, scrollOffset, selectedCategory);

            contentElement.scrollTo({
                top: scrollOffset,
                behavior: 'smooth',
            });
        }
    }, [contentRef, selectedCategory]);

    return (
        <S.Container gap={8}>
            <RepresentativeMenuSection />
            <S.MenuSection>
                <RestAreaDetailSection
                    title="전체 메뉴"
                    icon={MenuIcon}
                    description={`${totalMenuCount}개의 메뉴`}
                >
                    <RestAreaFoodCategory
                        availableCategories={availableMenuCategory}
                    />
                </RestAreaDetailSection>
                <S.MenuWrapper>
                    <FlexBox gap={40}>
                        <RestAreaFoodMenu
                            title="추천"
                            menus={recommendedMenuData}
                        />
                        {availableMenuCategory.map((menuCategory) =>
                            normalMenuData.get(menuCategory)?.length ? (
                                <RestAreaFoodMenu
                                    ref={(element) =>
                                        element &&
                                        menuListRef.current.set(
                                            menuCategory,
                                            element,
                                        )
                                    }
                                    title={menuCategory}
                                    menus={normalMenuData.get(menuCategory)!}
                                />
                            ) : null,
                        )}
                    </FlexBox>
                </S.MenuWrapper>
            </S.MenuSection>
        </S.Container>
    );
};
