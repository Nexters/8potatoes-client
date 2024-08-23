import { useEffect, useRef } from 'react';

import { useSearchParams } from 'react-router-dom';

import MenuIcon from '#/assets/icons/menu.svg?react';
import { AsyncBoundary } from '#/components/async-boundary';
import { FlexBox } from '#/components/flex-box';
import { FOOD_CATEGORY_ORDER } from '#/constants/food-menu';
import {
    RepresentativeMenuSection,
    RepresentativeMenuSectionLoading,
} from '#/features/rest-area/representative-menu-section';
import { RestAreaDetailSection } from '#/features/rest-area/rest-area-detail-section';
import {
    RestAreaFoodCategory,
    RestAreaFoodCategoryLoading,
} from '#/features/rest-area/rest-area-food-category';
import {
    RestAreaFoodMenu,
    RestAreaFoodMenuLoading,
} from '#/features/rest-area/rest-area-food-menu';
import useValidatedSearchParams from '#/hooks/useValidSearchParams';
import { useGetRestAreaMenuInfo } from '#/query-hooks/rest-area/query';

import * as S from './RestAreaFoodPage.style';

export const RestAreaFoodPage = () => {
    const [searchParam] = useSearchParams();
    const selectedCategory = searchParam.get('category') ?? '추천';

    const menuListRef = useRef<Map<string, HTMLDivElement>>(new Map());
    const pageContainerRef = useRef<HTMLDivElement>(null);

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
        const tabContentElement = document.getElementById('tab-content');

        if (menuElement && tabContentElement) {
            const menuElementPosition = menuElement.getBoundingClientRect().top;
            const tabContentPosition =
                tabContentElement.getBoundingClientRect().top;
            const scrollOffset = menuElementPosition - tabContentPosition - 120;

            if (scrollOffset >= 0) {
                menuElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
    
            }
        }
    }, [selectedCategory]);

    return (
        <S.Container gap={8}>
            <AsyncBoundary
                pendingFallback={<RepresentativeMenuSectionLoading />}
            >
                <RepresentativeMenuSection />
            </AsyncBoundary>
            <S.MenuSection>
                <RestAreaDetailSection
                    title="전체 메뉴"
                    icon={MenuIcon}
                    description={`${totalMenuCount}개의 메뉴`}
                >
                    <AsyncBoundary
                        pendingFallback={<RestAreaFoodCategoryLoading />}
                    >
                        <RestAreaFoodCategory
                            availableCategories={availableMenuCategory}
                        />
                    </AsyncBoundary>
                </RestAreaDetailSection>
                <S.MenuWrapper>
                    <AsyncBoundary
                        pendingFallback={<RestAreaFoodMenuLoading />}
                    >
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
                                        menus={
                                            normalMenuData.get(menuCategory)!
                                        }
                                    />
                                ) : null,
                            )}
                        </FlexBox>
                    </AsyncBoundary>
                </S.MenuWrapper>
            </S.MenuSection>
        </S.Container>
    );
};
