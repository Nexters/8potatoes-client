import { useMemo, useState } from 'react';

export const useDisclosure = (initialState: boolean = false) => {
    const [booleanState, setBooleanState] = useState(initialState);

    return useMemo(
        () => ({
            state: booleanState,
            setState: setBooleanState,
            true: () => setBooleanState(true),
            false: () => setBooleanState(false),
            toggle: () => setBooleanState((prevState) => !prevState),
        }),
        [booleanState],
    );
};
