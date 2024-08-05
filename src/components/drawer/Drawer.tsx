import { type ComponentProps, createContext, useContext, useMemo } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, MotionValue, useMotionValue } from 'framer-motion';

import { useDisclosure } from '#/hooks/useDisclosure';

import { DrawerClose } from './DrawerClose';
import { DrawerContent } from './DrawerContent';
import { DrawerTrigger } from './DrawerTrigger';

interface DrawerContextType {
    isDrawerOpen: boolean;
    currentHeightIndex: MotionValue<number>;
    openDrawer: () => void;
    closeDrawer: () => void;
}

const DrawerContext = createContext<DrawerContextType | null>(null);

interface DrawerRootProps
    extends Omit<ComponentProps<typeof Dialog.Root>, 'open' | 'onOpenChange'> {
    initialOpen?: boolean;
}

export const DrawerRoot = ({
    children,
    initialOpen = false,
    ...restProps
}: DrawerRootProps) => {
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
            currentHeightIndex,
            openDrawer,
            closeDrawer,
        }),
        [isDrawerOpen, currentHeightIndex, openDrawer, closeDrawer],
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
