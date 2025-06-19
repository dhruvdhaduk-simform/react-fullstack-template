import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from '@/router';
import '@/index.css';

import { trpc } from '@/utils/trpc';
import { httpBatchLink } from '@trpc/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const trpcClient = trpc.createClient({
    links: [
        httpBatchLink({
            url: import.meta.env.DEV ? 'http://localhost:2022' : '/api/trpc',
        }),
    ],
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </trpc.Provider>
    </StrictMode>
);
