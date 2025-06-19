import { Outlet, NavLink } from 'react-router';

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
            <header className="fixed top-0 w-full bg-white/70 dark:bg-black/70 backdrop-blur shadow-md z-10">
                <nav className="flex justify-center items-center gap-4 p-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-lg transition-colors hover:bg-indigo-200 dark:hover:bg-gray-700 ${
                                isActive ? 'bg-indigo-300 dark:bg-gray-600' : ''
                            }`
                        }
                    >
                        Home Page
                    </NavLink>
                    <NavLink
                        to="/math"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-lg transition-colors hover:bg-indigo-200 dark:hover:bg-gray-700 ${
                                isActive ? 'bg-indigo-300 dark:bg-gray-600' : ''
                            }`
                        }
                    >
                        Math Page
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-lg transition-colors hover:bg-indigo-200 dark:hover:bg-gray-700 ${
                                isActive ? 'bg-indigo-300 dark:bg-gray-600' : ''
                            }`
                        }
                    >
                        About Page
                    </NavLink>
                    <NavLink
                        to="/aslfdasdjsfkl"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-lg transition-colors hover:bg-indigo-200 dark:hover:bg-gray-700 ${
                                isActive ? 'bg-indigo-300 dark:bg-gray-600' : ''
                            }`
                        }
                    >
                        Any Random Page
                    </NavLink>
                </nav>
            </header>
            <main className="pt-24 p-4">
                <Outlet />
            </main>
        </div>
    );
}

export default App;
