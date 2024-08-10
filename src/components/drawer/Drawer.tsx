import {
    type ComponentProps,
    type Dispatch,
    type SetStateAction,
    createContext,
    useContext,
    useMemo,
} from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, MotionValue, useMotionValue } from 'framer-motion';

import { DrawerClose } from './DrawerClose';
import { DrawerContent } from './DrawerContent';
import { DrawerTrigger } from './DrawerTrigger';

interface DrawerContextType {
    isOverlayExist: boolean;
    isCloseWhenSlideDown: boolean;
    isDrawerOpen: boolean;
    currentHeightIndex: MotionValue<number>;
    openDrawer: () => void;
    closeDrawer: () => void;
}

const DrawerContext = createContext<DrawerContextType | null>(null);

interface DrawerRootProps
    extends Omit<ComponentProps<typeof Dialog.Root>, 'open' | 'onOpenChange'> {
    isDrawerOpen: boolean;
    setDrawerOpen: Dispatch<SetStateAction<boolean>>;
    /** Drawer 의 Dim 영역을 보이게 할지 설정하는 변수 isOverlayExist */
    isOverlayExist?: boolean;
    /** Drawer 를 맨 아래로 내렸을 경우 컴포넌트를 Unmount 할지를 정하는 변수 isCloseWhenSlideDown */
    isCloseWhenSlideDown?: boolean;
}

export const DrawerRoot = ({
    children,
    isDrawerOpen,
    setDrawerOpen,
    isOverlayExist = true,
    isCloseWhenSlideDown = true,
    ...restProps
}: DrawerRootProps) => {
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
            openDrawer: () => setDrawerOpen(true),
            closeDrawer: () => setDrawerOpen(false),
        }),
        [
            isDrawerOpen,
            isOverlayExist,
            isCloseWhenSlideDown,
            currentHeightIndex,
            setDrawerOpen,
        ],
    );

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

export const useDrawerContext = () => {
    const drawerContext = useContext(DrawerContext);

    if (!drawerContext)
        throw new Error(
            'useDrawerContext 는 Drawer 컴포넌트 내부에서만 사용해야 합니다.',
        );

    return drawerContext;
};

export const Drawer = Object.assign(DrawerRoot, {
    Trigger: DrawerTrigger,
    Close: DrawerClose,
    Content: DrawerContent,
});
