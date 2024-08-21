import { type ComponentProps, type PropsWithChildren, Suspense } from 'react';

import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';

interface PropsType
    extends Omit<ComponentProps<typeof ErrorBoundary>, 'fallbackRender'> {
    pendingFallback: ComponentProps<typeof Suspense>['fallback'];
    rejectedFallback?: ComponentProps<typeof ErrorBoundary>['fallbackRender'];
}

// FIXME : 추후 에러 Fallback UI 시안이 나올 경우 대체해야 함
const FallbackComponent = ({ error }: FallbackProps) => <p>{error.message}</p>;

export const AsyncBoundary = ({
    pendingFallback,
    rejectedFallback,
    children,
}: PropsWithChildren<PropsType>) => (
    <ErrorBoundary fallbackRender={rejectedFallback || FallbackComponent}>
        <Suspense fallback={pendingFallback}>{children}</Suspense>
    </ErrorBoundary>
);
