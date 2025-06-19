import { Link, Outlet } from 'react-router';

function App() {
    return (
        <div>
            <div className="flex justify-center items-center gap-4 p-4">
                <Link className="hover:underline" to="/">
                    Home Page
                </Link>
                <Link className="hover:underline" to="/math">
                    Math Page
                </Link>
                <Link className="hover:underline" to="/about">
                    About Page
                </Link>
                <Link className="hover:underline" to="/aslfdasdjsfkl">
                    Any Random Page
                </Link>
            </div>
            <hr />
            <div className="p-4">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
