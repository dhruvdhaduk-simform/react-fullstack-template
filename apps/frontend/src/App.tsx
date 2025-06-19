import { Link, Outlet } from 'react-router';

function App() {
    return (
        <div>
            <Link to="/">Home Page</Link>
            <br />
            <Link to="/about">About Page</Link>
            <br />
            <Link to="/aslfdasdjsfkl">Any Random Page</Link>
            <hr />
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
