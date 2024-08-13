import { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

interface UseValidatedSearchParamsProps {
    paramName: string;
    expectedValue: string | string[];
    defaultValue: string;
    checkIfNull?: boolean;
}

function useValidatedSearchParams({
    paramName,
    expectedValue,
    defaultValue,
    checkIfNull,
}: UseValidatedSearchParamsProps) {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const param = searchParams.get(paramName);

        if (checkIfNull && param === null) {
            searchParams.set(paramName, defaultValue);
            setSearchParams(searchParams, { replace: true });
            return;
        }

        const isValidParams =
            param &&
            (Array.isArray(expectedValue)
                ? expectedValue.includes(param)
                : param === expectedValue);

        if (!isValidParams) {
            searchParams.set(paramName, defaultValue);
            setSearchParams(searchParams, { replace: true });
        }
    }, [
        searchParams,
        setSearchParams,
        paramName,
        expectedValue,
        defaultValue,
        checkIfNull,
    ]);
}

export default useValidatedSearchParams;
