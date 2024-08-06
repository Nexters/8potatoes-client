import { type ComponentProps, createContext, useContext, useMemo } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, MotionValue, useMotionValue } from 'framer-motion';

import { useDisclosure } from '#/hooks/useDisclosure';

import { UnControlledDrawerClose } from './UnControlledDrawerClose';
import { UnControlledDrawerContent } from './UnControlledDrawerContent';
import { UnControlledDrawerTrigger } from './UnControlledDrawerTrigger';

interface UnControlledDrawerContextType {
    isDrawerOpen: boolean;
    currentHeightIndex: MotionValue<number>;
    openDrawer: () => void;
    closeDrawer: () => void;
}

const DrawerContext = createContext<UnControlledDrawerContextType | null>(null);

interface UnControlledDrawerRootProps
    extends Omit<ComponentProps<typeof Dialog.Root>, 'open' | 'onOpenChange'> {
    initialOpen?: boolean;
}

export const UnControlledDrawerRoot = ({
    children,
    initialOpen = false,
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
