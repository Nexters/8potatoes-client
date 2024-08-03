import { type PropsWithChildren } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import {
    AnimatePresence,
    type PanInfo,
    useMotionValue,
    useSpring,
    useTransform,
} from 'framer-motion';

import { useDrawerContext } from './Drawer';
import * as S from './Drawer.style';

type DrawerContentProps = PropsWithChildren<{
    heightStepList: number[];
    threshold?: number;
}>;

export const DrawerContent = ({
    children,
    heightStepList,
    threshold = 30,
    ...restProps
}: DrawerContentProps) => {
    const { isDrawerOpen, currentHeightIndex, closeDrawer } =
        useDrawerContext();

    const stepAmount = heightStepList.length;
    const heightStepIndexList = [...Array(stepAmount).keys()];

    const startY = useMotionValue(0);

    const targetHeight = useTransform(
        currentHeightIndex,
        heightStepIndexList,
        heightStepList,
    );
    const animatedHeight = useSpring(targetHeight, {
        stiffness: 200,
        damping: 20,
    });

    const height = useTransform(animatedHeight, (h) => `${h}dvh`);
    const top = useTransform(height, (h) => `calc(100dvh - ${h})`);

    const handlePanStart = (_event: PointerEvent, info: PanInfo) => {
        startY.set(info.point.y);
    };

    const handlePanEnd = (_event: PointerEvent, info: PanInfo) => {
        const deltaY = info.point.y - startY.get();
        let updatedHeightIndex = currentHeightIndex.get();

        if (deltaY < -threshold && updatedHeightIndex < 2) {
            updatedHeightIndex += 1;
            currentHeightIndex.set(updatedHeightIndex);
        } else if (deltaY > threshold && updatedHeightIndex > 0) {
            updatedHeightIndex -= 1;
        } else if (deltaY > threshold && updatedHeightIndex === 0) {
            closeDrawer();
        }

        currentHeightIndex.set(updatedHeightIndex);
    };

    return (
        <AnimatePresence>
            {isDrawerOpen && (
                <>
                    <Dialog.Overlay forceMount asChild>
                        <S.Overlay
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={closeDrawer}
                        />
                    </Dialog.Overlay>
                    <Dialog.Content forceMount asChild {...restProps}>
                        <S.Content
                            initial={{ opacity: 0, y: '100%' }}
                            animate={{ opacity: 1, y: '0%' }}
                            exit={{ opacity: 0, y: '100%' }}
                            transition={{ duration: 0.3 }}
                            style={{
                                height,
                                top,
                            }}
                            onPanStart={handlePanStart}
                            onPanEnd={handlePanEnd}
                        >
                            <S.HolderWrapper>
                                <S.Holder />
                            </S.HolderWrapper>
                            {children}
                        </S.Content>
                    </Dialog.Content>
                </>
            )}
        </AnimatePresence>
    );
};
