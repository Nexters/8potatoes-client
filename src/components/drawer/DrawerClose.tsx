import type { ComponentProps, PropsWithChildren } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

export const DrawerClose = ({
    children,
    ...restProps
}: PropsWithChildren<ComponentProps<typeof Dialog.Close>>) => (
    <Dialog.Close asChild {...restProps}>
        {children}
    </Dialog.Close>
);