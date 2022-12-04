import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import ThemeBtn from './ThemeBtn';

function Layout() {
    return (
        <div className="max-lg:mb-[60px]">
            <Outlet />
            <ThemeBtn />
            <Navbar />
        </div>
    );
}

export default Layout;
