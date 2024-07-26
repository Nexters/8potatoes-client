import { Suspense } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { NavermapsProvider } from 'react-naver-maps';
import { Outlet, createBrowserRouter } from 'react-router-dom';

import App from '#/App';
import LocationSearch from '#/pages/location-search';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 0,
        },
    },
});

const InitializedDataProvider = () => (
    <QueryClientProvider client={queryClient}>
        <NavermapsProvider ncpClientId="h3e8buxdyc">
            <Suspense fallback={<div>Loading</div>}>
                <ReactQueryDevtools />
                <Outlet />
            </Suspense>
        </NavermapsProvider>
    </QueryClientProvider>
);

export const applicationRouter: ReturnType<typeof createBrowserRouter> =
    createBrowserRouter([
        {
            element: <InitializedDataProvider />,
            children: [
                {
                    path: '/',
                    errorElement: <div>에러</div>,
                    element: <App />,
                },
                {
                    path: '/location-search',
                    errorElement: <div>에러</div>,
                    element: <LocationSearch />,
                },
            ],
        },
    ]);
