import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';
import App from '@/App';
import { HomePage } from './pages/HomePage';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<p>This is About Page</p>} />
            <Route path="*" element={<p>404 Not Found</p>} />
        </Route>
    )
);
