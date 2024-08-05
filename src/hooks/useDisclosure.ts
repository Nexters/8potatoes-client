import { useMemo, useState } from 'react';

export const useDisclosure = (initialState: boolean = false) => {
    const [booleanState, setBooleanState] = useState(initialState);

    return useMemo(
        () => ({
            state: booleanState,
            setState: setBooleanState,
            setTrue: () => setBooleanState(true),
            setFalse: () => setBooleanState(false),
            toggle: () => setBooleanState((prevState) => !prevState),
        }),
        [booleanState],
    );
};
