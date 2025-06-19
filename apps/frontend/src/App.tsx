import { Outlet, NavLink } from 'react-router';

function App() {
    return (
        <div>
            <div className="flex justify-center items-center gap-4 p-4">
                <NavLink
                    className={({ isActive }) => `hover:underline ${isActive && 'text-red-500'}`}
                    to="/"
                >
                    Home Page
                </NavLink>
                <NavLink
                    className={({ isActive }) => `hover:underline ${isActive && 'text-red-500'}`}
                    to="/math"
                >
                    Math Page
                </NavLink>
                <NavLink
                    className={({ isActive }) => `hover:underline ${isActive && 'text-red-500'}`}
                    to="/about"
                >
                    About Page
                </NavLink>
                <NavLink
                    className={({ isActive }) => `hover:underline ${isActive && 'text-red-500'}`}
                    to="/aslfdasdjsfkl"
                >
                    Any Random Page
                </NavLink>
            </div>
            <hr />
            <div className="p-4">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
