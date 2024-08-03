import type { ComponentProps, PropsWithChildren } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import { useDrawerContext } from './Drawer';

type DrawerTriggerProps = Omit<
    ComponentProps<typeof Dialog.Trigger>,
    'asChild'
>;

export const DrawerTrigger = ({
    children,
    ...restProps
}: DrawerTriggerProps) => {
    const { openDrawer } = useDrawerContext();

    return (
        <Dialog.Trigger onClick={openDrawer} asChild {...restProps}>
            {children}
        </Dialog.Trigger>
    );
};
