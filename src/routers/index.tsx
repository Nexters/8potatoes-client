import { Suspense } from 'react';

import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { NavermapsProvider } from 'react-naver-maps';
import { Outlet, createBrowserRouter } from 'react-router-dom';

import App from '#/App';
import LocationSearch from '#/pages/location-search';
import { MobileView } from '#/pages/templates/mobile-view';
import { GlobalStyle } from '#/styles/global';
import { theme } from '#/styles/theme';

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
        <ThemeProvider theme={theme}>
            <NavermapsProvider
                ncpClientId={import.meta.env.VITE_X_NCP_APIGW_API_KEY_ID}
            >
                <ReactQueryDevtools />
                <GlobalStyle />
                <Suspense fallback={<div>Loading</div>}>
                    <MobileView>
                        <Outlet />
                    </MobileView>
                </Suspense>
            </NavermapsProvider>
        </ThemeProvider>
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
