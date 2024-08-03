import { type ComponentProps } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import { DrawerClose } from './DrawerClose';
import { DrawerContent } from './DrawerContent';
import { DrawerTrigger } from './DrawerTrigger';

export const DrawerRoot = ({
    children,
    ...restProps
}: ComponentProps<typeof Dialog.Root>) => {
    return <Dialog.Root {...restProps}>{children}</Dialog.Root>;
};

export const Drawer = Object.assign(DrawerRoot, {
    Trigger: DrawerTrigger,
    Content: DrawerContent,
    Close: DrawerClose,
});
