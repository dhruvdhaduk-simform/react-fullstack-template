import { Outlet, NavLink } from 'react-router';

function App() {
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <header className="fixed top-0 w-full bg-white/70 dark:bg-white/10 backdrop-blur shadow-md z-10">
                <nav className="flex justify-center items-center gap-4 p-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded transition-colors hover:bg-white/10 dark:hover:bg-white/10 font-medium ${
                                isActive ? 'bg-white/20 dark:bg-white/20' : ''
                            }`
                        }
                    >
                        Home Page
                    </NavLink>
                    <NavLink
                        to="/math"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded transition-colors hover:bg-white/10 dark:hover:bg-white/10 font-medium ${
                                isActive ? 'bg-white/20 dark:bg-white/20' : ''
                            }`
                        }
                    >
                        Math Page
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded transition-colors hover:bg-white/10 dark:hover:bg-white/10 font-medium ${
                                isActive ? 'bg-white/20 dark:bg-white/20' : ''
                            }`
                        }
                    >
                        About Page
                    </NavLink>
                    <NavLink
                        to="/aslfdasdjsfkl"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded transition-colors hover:bg-white/10 dark:hover:bg-white/10 font-medium ${
                                isActive ? 'bg-white/20 dark:bg-white/20' : ''
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
