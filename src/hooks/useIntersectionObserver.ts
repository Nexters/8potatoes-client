import { useEffect, useRef } from 'react';

interface UseIntersectionObserverOptions<T> {
    onIntersect: () => void;
    enabled: boolean;
}

function useIntersectionObserver<T extends HTMLElement>({
    onIntersect,
    enabled,
}: UseIntersectionObserverOptions<T>) {
    const targetRef = useRef<T>(null);

    useEffect(() => {
        if (!enabled || !targetRef.current) {
            return;
        }

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    onIntersect();
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback);
        observer.observe(targetRef.current);

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, [targetRef, onIntersect, enabled]);

    return { targetRef };
}

export default useIntersectionObserver;
