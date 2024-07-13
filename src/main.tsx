import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { applicationRouter } from '#/routers';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={applicationRouter} />,
);
