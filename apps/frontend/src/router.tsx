import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';
import App from '@/App';
import { HomePage } from './pages/HomePage';
import { MathPage } from './pages/MathPage';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="math" element={<MathPage />} />
            <Route path="about" element={<p className='text-center'>This is About Page</p>} />
            <Route path="*" element={<p className='text-center'>404 Not Found</p>} />
        </Route>
    )
);
