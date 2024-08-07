import type { ComponentProps } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import { useUnControlledDrawerContext } from './UnControlledDrawer';

type UnControlledDrawerCloseProps = Omit<
    ComponentProps<typeof Dialog.Close>,
    'asChild'
>;

export const UnControlledDrawerClose = ({
    children,
    ...restProps
}: UnControlledDrawerCloseProps) => {
    const { closeDrawer } = useUnControlledDrawerContext();
    return (
        <Dialog.Close onClick={closeDrawer} asChild {...restProps}>
            {children}
        </Dialog.Close>
    );
};
