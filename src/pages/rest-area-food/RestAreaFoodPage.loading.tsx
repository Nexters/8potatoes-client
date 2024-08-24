import MenuIcon from '#/assets/icons/menu.svg?react';
import { RepresentativeMenuSectionLoading } from '#/features/rest-area/representative-menu-section';
import { RestAreaDetailSection } from '#/features/rest-area/rest-area-detail-section';
import { RestAreaFoodCategoryLoading } from '#/features/rest-area/rest-area-food-category';
import { RestAreaFoodMenuLoading } from '#/features/rest-area/rest-area-food-menu';

import * as S from './RestAreaFoodPage.style';

export const RestAreaFoodPageLoading = () => (
    <S.Container gap={8}>
        <RepresentativeMenuSectionLoading />
        <S.MenuSection>
            <RestAreaDetailSection title="전체 메뉴" icon={MenuIcon}>
                <RestAreaFoodCategoryLoading />
            </RestAreaDetailSection>
            <S.MenuWrapper>
                <RestAreaFoodMenuLoading />
            </S.MenuWrapper>
        </S.MenuSection>
    </S.Container>
);
