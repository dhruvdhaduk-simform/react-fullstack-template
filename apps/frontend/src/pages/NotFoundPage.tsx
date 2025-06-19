import { NavLink } from 'react-router';

export function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] p-4">
            <h1 className="text-9xl font-extrabold text-black dark:text-white">404</h1>
            <p className="mt-4 text-lg text-black/70 dark:text-white/70">
                Oops! The page you're looking for doesn't exist.
            </p>
            <NavLink
                to="/"
                className="mt-6 px-6 py-3 bg-black text-white rounded hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 transition"
            >
                Go back home
            </NavLink>
        </div>
    );
}
