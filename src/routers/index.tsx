import { Suspense } from 'react';

import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { NavermapsProvider } from 'react-naver-maps';
import { Outlet, createBrowserRouter } from 'react-router-dom';

import { AsyncBoundary } from '#/components/async-boundary';
import { InternalErrorPage } from '#/pages/internal-error';
import { LocationSearch, LocationSearchLoading } from '#/pages/location-search';
import { NotFoundPage } from '#/pages/not-found';
import {
    RestAreaFoodPage,
    RestAreaFoodPageLoading,
} from '#/pages/rest-area-food';
import {
    RestAreaFuelPage,
    RestAreaFuelPageLoading,
} from '#/pages/rest-area-fuel';
import { RestAreaMapPage } from '#/pages/rest-area-map';
import {
    RestAreaOtherInformation,
    RestAreaOtherInformationLoading,
} from '#/pages/rest-area-other-information';
import { MobileView } from '#/pages/templates/mobile-view';
import {
    RestAreaDetail,
    RestAreaDetailLoading,
} from '#/pages/templates/rest-area-detail';
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
                <MobileView>
                    <Outlet />
                </MobileView>
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
                    errorElement: <InternalErrorPage />,
                    element: (
                        <Suspense fallback={<LocationSearchLoading />}>
                            <LocationSearch />
                        </Suspense>
                    ),
                },
                {
                    path: '/rest-area/:restAreaId',
                    errorElement: <InternalErrorPage />,
                    element: (
                        <Suspense fallback={<RestAreaDetailLoading />}>
                            <RestAreaDetail />
                        </Suspense>
                    ),
                    children: [
                        {
                            path: 'foods',
                            element: (
                                <Suspense
                                    fallback={<RestAreaFoodPageLoading />}
                                >
                                    <RestAreaFoodPage />
                                </Suspense>
                            ),
                        },
                        {
                            path: 'fuel-parking',
                            element: (
                                <Suspense
                                    fallback={<RestAreaFuelPageLoading />}
                                >
                                    <RestAreaFuelPage />
                                </Suspense>
                            ),
                        },
                        {
                            path: 'other-information',
                            element: (
                                <AsyncBoundary
                                    pendingFallback={
                                        <RestAreaOtherInformationLoading />
                                    }
                                >
                                    <RestAreaOtherInformation />
                                </AsyncBoundary>
                            ),
                        },
                    ],
                },
                {
                    path: '/map',
                    errorElement: <InternalErrorPage />,
                    element: (
                        <Suspense fallback={<div></div>}>
                            <RestAreaMapPage />
                        </Suspense>
                    ),
                },
            ],
            errorElement: (
                <>
                    <GlobalStyle />
                    <NotFoundPage />
                </>
            ),
        },
    ]);
