import type { ComponentProps, PropsWithChildren } from 'react';

import * as Dialog from '@radix-ui/react-dialog';


export const DrawerTrigger = ({
    children,
    ...restProps
}: PropsWithChildren<ComponentProps<typeof Dialog.Trigger>>) => (
    <Dialog.Trigger asChild {...restProps}>
        {children}
    </Dialog.Trigger>
);