import { type PropsWithChildren } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import {
    AnimatePresence,
    type PanInfo,
    useMotionValue,
    useTransform,
} from 'framer-motion';

import { useUnControlledDrawerContext } from './UnControlledDrawer';
import * as S from './UnControlledDrawer.style';

export type HeightStepType = {
    unit: 'px' | 'dvh' | 'vh' | '%';
    value: number;
};

type UnControlledDrawerContentProps = PropsWithChildren<{
    heightStepList: HeightStepType[];
    threshold?: number;
}>;

export const UnControlledDrawerContent = ({
    children,
    heightStepList,
    threshold = 20,
    ...restProps
}: UnControlledDrawerContentProps) => {
    const {
        isDrawerOpen,
        isOverlayExist,
        isCloseWhenSlideDown,
        currentHeightIndex,
        closeDrawer,
    } = useUnControlledDrawerContext();

    const startY = useMotionValue(0);

    const stepAmount = heightStepList.length;
    const [stepUnitList, stepValueList] = heightStepList.reduce<
        [string[], number[]]
    >(
        ([currentUnitList, currentValueList], { unit, value }) => [
            [...currentUnitList, unit],
            [...currentValueList, value],
        ],
        [[], []],
    );

    const height = useTransform(
        currentHeightIndex,
        (index) => `${stepValueList[index]}${stepUnitList[index]}`,
    );

    const top = useTransform(height, (h) => `calc(100dvh - ${h})`);

    const handlePanStart = (_event: PointerEvent, info: PanInfo) => {
        startY.set(info.point.y);
    };

    const handlePanEnd = (_event: PointerEvent, info: PanInfo) => {
        const deltaY = info.point.y - startY.get();
        let updatedHeightIndex = currentHeightIndex.get();

        if (deltaY < -threshold && updatedHeightIndex < stepAmount - 1) {
            updatedHeightIndex += 1;
        } else if (deltaY > threshold && updatedHeightIndex > 0) {
            updatedHeightIndex -= 1;
        } else if (
            deltaY > threshold &&
            updatedHeightIndex === 0 &&
            isCloseWhenSlideDown
        ) {
            closeDrawer();
        }

        currentHeightIndex.set(updatedHeightIndex);
    };

    return (
        <AnimatePresence>
            {isDrawerOpen && (
                <>
                    {isOverlayExist ? (
                        <Dialog.Overlay forceMount asChild>
                            <S.Overlay
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={closeDrawer}
                            />
                        </Dialog.Overlay>
                    ) : null}
                    <Dialog.Content
                        forceMount
                        aria-describedby={undefined}
                        aria-label="Drawer"
                        asChild
                        {...restProps}
                    >
                        <S.ContentWrapper
                            initial={{ opacity: 0, y: '100%' }}
                            animate={{ opacity: 1, y: '0%' }}
                            exit={{ opacity: 0, y: '100%' }}
                            style={{
                                maxHeight: height,
                                height,
                                top,
                            }}
                            transition={{
                                layout: { duration: 0.05 }
                            }}
                            layout
                            onPanStart={handlePanStart}
                            onPanEnd={handlePanEnd}
                        >
                            <S.HolderWrapper>
                                <S.Holder />
                            </S.HolderWrapper>
                            {children}
                        </S.ContentWrapper>
                    </Dialog.Content>
                </>
            )}
        </AnimatePresence>
    );
};
