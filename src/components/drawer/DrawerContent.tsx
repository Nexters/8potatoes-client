import { type PropsWithChildren, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import {
    AnimatePresence,
    type PanInfo,
    useMotionValue,
    useSpring,
    useTransform,
} from 'framer-motion';

import * as S from './Drawer.style';

export const DrawerContent = ({ children }: PropsWithChildren<unknown>) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const startY = useMotionValue(0);
    const currentHeightIndex = useMotionValue(0);

    const targetHeight = useTransform(
        currentHeightIndex,
        [0, 1, 2],
        [25, 50, 90],
    );
    const animatedHeight = useSpring(targetHeight, {
        stiffness: 200,
        damping: 20,
    });

    const height = useTransform(animatedHeight, (h) => `${h}dvh`);
    const top = useTransform(height, (h) => `calc(100dvh - ${h})`);

    const handleOpenDialogChange = (open: boolean) => {
        setDrawerOpen(open);
        currentHeightIndex.set(0);
    };

    const handlePanStart = (_event: PointerEvent, info: PanInfo) => {
        startY.set(info.point.y);
    };

    const handlePanEnd = (_event: PointerEvent, info: PanInfo) => {
        const deltaY = info.point.y - startY.get();
        const threshold = 30;

        let updatedHeightIndex = currentHeightIndex.get();

        if (deltaY < -threshold && updatedHeightIndex < 2) {
            updatedHeightIndex += 1;
        } else if (deltaY > threshold && updatedHeightIndex > 0) {
            updatedHeightIndex -= 1;
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
                        />
                    </Dialog.Overlay>
                    <Dialog.Content forceMount asChild>
                        <S.Content
                            initial={{ opacity: 0, y: '100%' }}
                            animate={{ opacity: 1, y: '0%' }}
                            exit={{ opacity: 0, y: '100%' }}
                            transition={{ duration: 0.3 }}
                            style={{
                                height,
                                top,
                            }}
                        >
                            <S.HolderWrapper
                                onPanStart={handlePanStart}
                                onPanEnd={handlePanEnd}
                            >
                                <S.Holder />
                            </S.HolderWrapper>
                            {children}
                            <Dialog.Close asChild>
                                <button onClick={() => setDrawerOpen(false)}>
                                    Close
                                </button>
                            </Dialog.Close>
                        </S.Content>
                    </Dialog.Content>
                </>
            )}
        </AnimatePresence>
    );
};
