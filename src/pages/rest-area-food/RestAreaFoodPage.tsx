import { useEffect, useRef } from 'react';

import { useSearchParams } from 'react-router-dom';

import { FlexBox } from '#/components/flex-box';
import { RepresentativeMenuSection } from '#/features/rest-area/representative-menu-section';
import { RestAreaDetailSection } from '#/features/rest-area/rest-area-detail-section';
import { RestAreaFoodCategory } from '#/features/rest-area/rest-area-food-category';
import { RestAreaFoodMenu } from '#/features/rest-area/rest-area-food-menu';
import useValidatedSearchParams from '#/hooks/useValidSearchParams';
import { useGetRestAreaMenuInfo } from '#/query-hooks/rest-area/query';
import type { MenuCategoryType } from '#/types/menu';

import * as S from './RestAreaFoodPage.style';

export const RestAreaFoodPage = () => {
    const [searchParam] = useSearchParams();
    const selectedCategory = searchParam.get('category') ?? '추천';

    const menuListRef = useRef<Map<string, HTMLDivElement>>(new Map());

    const {
        data: { totalMenuCount, recommendedMenuData, normalMenuData },
    } = useGetRestAreaMenuInfo();

    const availableMenuCategory: MenuCategoryType[] = Array.from(
        normalMenuData.keys(),
    );

    useValidatedSearchParams({
        paramName: 'category',
        expectedValue: ['추천', ...availableMenuCategory],
        defaultValue: '추천',
        checkIfNull: true,
    });

    useEffect(() => {
        const menuElement = menuListRef.current.get(selectedCategory);
        if (menuElement) {
            menuElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [selectedCategory]);

    return (
        <S.Container gap={8}>
            <RepresentativeMenuSection />
            <S.MenuSection>
                <RestAreaDetailSection
                    title="전체 메뉴"
                    iconSrc=""
                    iconAlt="전체 메뉴 아이콘"
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
