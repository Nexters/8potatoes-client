import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { NavermapsProvider } from 'react-naver-maps';
import { Outlet, createBrowserRouter } from 'react-router-dom';

import App from '#/App';
import { MobileView } from '#/pages/templates/mobile-view';

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
        <NavermapsProvider
            ncpClientId={import.meta.env.VITE_X_NCP_APIGW_API_KEY_ID}
        >
            <MobileView>
                <Outlet />
            </MobileView>
            <ReactQueryDevtools />
        </NavermapsProvider>
    </QueryClientProvider>
);

export const applicationRouter = createBrowserRouter([
    {
        element: <InitializedDataProvider />,
        children: [
            {
                path: '/',
                errorElement: <div>에러</div>,
                element: <App />,
            },
        ],
    },
]);
