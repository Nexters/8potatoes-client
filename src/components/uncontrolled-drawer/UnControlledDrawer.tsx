import {
    type ComponentProps,
    createContext,
    useContext,
    useEffect,
    useMemo,
} from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, MotionValue, useMotionValue } from 'framer-motion';

import { useDisclosure } from '#/hooks/useDisclosure';

import { UnControlledDrawerClose } from './UnControlledDrawerClose';
import { UnControlledDrawerContent } from './UnControlledDrawerContent';
import { UnControlledDrawerTrigger } from './UnControlledDrawerTrigger';

interface UnControlledDrawerContextType {
    isOverlayExist: boolean;
    isCloseWhenSlideDown: boolean;
    isDrawerOpen: boolean;
    currentHeightIndex: MotionValue<number>;
    openDrawer: () => void;
    closeDrawer: () => void;
}

const DrawerContext = createContext<UnControlledDrawerContextType | null>(null);

interface UnControlledDrawerRootProps
    extends Omit<ComponentProps<typeof Dialog.Root>, 'open' | 'onOpenChange'> {
    initialOpen?: boolean;
    /** Drawer 의 Dim 영역을 보이게 할지 설정하는 변수 isOverlayExist */
    isOverlayExist?: boolean;
    /** Drawer 를 맨 아래로 내렸을 경우 컴포넌트를 Unmount 할지를 정하는 변수 isCloseWhenSlideDown */
    isCloseWhenSlideDown?: boolean;
}

export const UnControlledDrawerRoot = ({
    children,
    initialOpen = false,
    isOverlayExist = true,
    isCloseWhenSlideDown = true,
    ...restProps
}: UnControlledDrawerRootProps) => {
    const {
        state: isDrawerOpen,
        setTrue: openDrawer,
        setFalse: closeDrawer,
    } = useDisclosure(initialOpen);

    const currentHeightIndex = useMotionValue(0);

    const handleChangeDrawerOpen = () => {
        currentHeightIndex.set(0);
    };

    const value = useMemo(
        () => ({
            isDrawerOpen,
            isOverlayExist,
            isCloseWhenSlideDown,
            currentHeightIndex,
            openDrawer,
            closeDrawer,
        }),
        [
            isDrawerOpen,
            isOverlayExist,
            isCloseWhenSlideDown,
            currentHeightIndex,
            openDrawer,
            closeDrawer,
        ],
    );

    useEffect(() => {
        if (isDrawerOpen && !isOverlayExist) {
            const timer = setTimeout(() => {
                document.body.style.pointerEvents = '';
            }, 0);

            return () => clearTimeout(timer);
        } else {
            document.body.style.pointerEvents = 'auto';
        }
    }, [isDrawerOpen, isOverlayExist]);

    return (
        <DrawerContext.Provider value={value}>
            <Dialog.Root
                open={isDrawerOpen}
                onOpenChange={handleChangeDrawerOpen}
                {...restProps}
            >
                <AnimatePresence>{children}</AnimatePresence>
            </Dialog.Root>
        </DrawerContext.Provider>
    );
};

export const useUnControlledDrawerContext = () => {
    const drawerContext = useContext(DrawerContext);

    if (!drawerContext)
        throw new Error(
            'useDrawerContext 는 Drawer 컴포넌트 내부에서만 사용해야 합니다.',
        );

    return drawerContext;
};

export const UnControlledDrawer = Object.assign(UnControlledDrawerRoot, {
    Trigger: UnControlledDrawerTrigger,
    Close: UnControlledDrawerClose,
    Content: UnControlledDrawerContent,
});
