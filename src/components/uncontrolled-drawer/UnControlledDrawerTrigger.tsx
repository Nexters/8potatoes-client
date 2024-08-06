import type { ComponentProps } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import { useUnControlledDrawerContext } from './UnControlledDrawer';

type UnControlledDrawerTriggerProps = Omit<
    ComponentProps<typeof Dialog.Trigger>,
    'asChild'
>;

export const UnControlledDrawerTrigger = ({
    children,
    ...restProps
}: UnControlledDrawerTriggerProps) => {
    const { openDrawer } = useUnControlledDrawerContext();

    return (
        <Dialog.Trigger onClick={openDrawer} asChild {...restProps}>
            {children}
        </Dialog.Trigger>
    );
};
