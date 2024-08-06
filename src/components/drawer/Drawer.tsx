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
}

export const DrawerRoot = ({
    children,
    isDrawerOpen,
    setDrawerOpen,
    ...restProps
}: DrawerRootProps) => {
    const currentHeightIndex = useMotionValue(0);

    const handleChangeDrawerOpen = () => {
        currentHeightIndex.set(0);
    };

    console.log(isDrawerOpen);

    const value = useMemo(
        () => ({
            isDrawerOpen,
            currentHeightIndex,
            openDrawer: () => setDrawerOpen(true),
            closeDrawer: () => setDrawerOpen(false),
        }),
        [isDrawerOpen, currentHeightIndex, setDrawerOpen],
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
