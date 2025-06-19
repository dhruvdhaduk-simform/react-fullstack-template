import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';
import App from '@/App';
import { HomePage } from './pages/HomePage';
import { MathPage } from './pages/MathPage';
import { AboutPage } from './pages/AboutPage';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="math" element={<MathPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);
