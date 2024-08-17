import { forwardRef, useRef } from 'react';

import { type PanInfo, useMotionValue, useTransform } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';

import AlternativeImage from '#/assets/images/alternative-image.png';
import { Text } from '#/components/text';

import { FOOD_CATEGORIES } from './RestAreaFoodCategory.constants';
import * as S from './RestAreaFoodCategory.style';

export const RestAreaFoodCategory = forwardRef<HTMLDivElement, unknown>(
    (_, ref) => {
        const [searchParams, setSearchParams] = useSearchParams();
        const currentDeltaX = useMotionValue(0);

        const containerRef = useRef<HTMLDivElement>(null);
        const categoryListRef = useRef<HTMLDivElement>(null);

        const handlePan = (_event: PointerEvent, info: PanInfo) => {
            if (containerRef.current && categoryListRef.current) {
                const { width } = containerRef.current.getBoundingClientRect();
                const { width: categoryListWidth } =
                    categoryListRef.current.getBoundingClientRect();

                const availableDeltaX = width - categoryListWidth;

                let updatedDeltaX = currentDeltaX.get() + info.delta.x;
                if (updatedDeltaX > 0) updatedDeltaX = 0;
                if (updatedDeltaX < availableDeltaX) updatedDeltaX = availableDeltaX;

                currentDeltaX.set(updatedDeltaX);
            }
        };

        const currentSelectedCategory = searchParams.get('category') ?? 'total';

        const handleSelectCategory = (category: string) => {
            setSearchParams({ category }, { preventScrollReset: true });
        };

        return (
            <S.Container ref={containerRef}>
                <S.CategoryList
                    row
                    ref={categoryListRef}
                    gap={16}
                    onPan={handlePan}
                    style={{
                        x: currentDeltaX,
                        cursor: 'grab',
                    }}
                >
                    {FOOD_CATEGORIES.map(({ id, label, icon }) => (
                        <S.CategoryOption
                            onPan={handlePan}
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
    },
);
