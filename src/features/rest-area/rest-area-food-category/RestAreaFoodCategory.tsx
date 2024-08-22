import { forwardRef, useRef } from "react";

import { useMotionValue } from "framer-motion";
import { useSearchParams } from "react-router-dom";

import AlternativeImage from "#/assets/images/alternative-image.png";
import { Text } from "#/components/text";
import type { MenuCategoryType } from "#/types/menu";

import { FOOD_CATEGORIES } from "./RestAreaFoodCategory.constants";
import * as S from "./RestAreaFoodCategory.style";

interface RestAreaFoodCategoryProps {
    availableCategories: MenuCategoryType[];
}

export const RestAreaFoodCategory = forwardRef<
    HTMLDivElement,
    RestAreaFoodCategoryProps
>(({ availableCategories }, containerRef) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentDeltaX = useMotionValue(0);

    const categoryListRef = useRef<HTMLDivElement>(null);

    const currentSelectedCategory = searchParams.get("category") ?? "추천";
    const filteredCategories = FOOD_CATEGORIES.filter(
        (category) =>
            category.id === "추천" || availableCategories.includes(category.id),
    );

    const handleSelectCategory = (category: string) => {
        setSearchParams({ category }, { preventScrollReset: true });
    };

    return (
        <S.Container ref={containerRef}>
            <S.CategoryList
                row
                ref={categoryListRef}
                gap={16}
                style={{
                    x: currentDeltaX,
                    cursor: "grab",
                }}
            >
                {filteredCategories.map(({ id, label }) => (
                    <S.CategoryOption
                        isSelected={id === currentSelectedCategory}
                        gap={8}
                        key={id}
                        onClick={() => handleSelectCategory(id)}
                    >
                        <img src={AlternativeImage} alt="카테고리 아이콘" />
                        <Text typography="bodyMedium14">{label}</Text>
                    </S.CategoryOption>
                ))}
            </S.CategoryList>
        </S.Container>
    );
});
