import type { ComponentProps } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import { useDrawerContext } from './Drawer';

type DrawerCloseProps = Omit<ComponentProps<typeof Dialog.Close>, 'asChild'>;

export const DrawerClose = ({ children, ...restProps }: DrawerCloseProps) => {
    const { closeDrawer } = useDrawerContext();
    return (
        <Dialog.Close onClick={closeDrawer} asChild {...restProps}>
            {children}
        </Dialog.Close>
    );
};
