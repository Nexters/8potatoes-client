import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { NavermapsProvider } from 'react-naver-maps';
import { Outlet, createBrowserRouter } from 'react-router-dom';

import App from '#/App';

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
        <NavermapsProvider finClientId="">
            <ReactQueryDevtools />
            <Outlet />
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
