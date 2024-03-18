import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { MdOutlineSpaceDashboard, MdOutlineLock, MdOutlinePrivacyTip, MdMenu, MdClose } from "react-icons/md";

function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        location.pathname === '/' && navigate('/dashboard');
    }, [location, navigate]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-x-4">
            <aside className={`sm:col-span-1 bg-gray-200 h-screen sticky top-0 px-6 py-8 ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
                <nav className="flex flex-col space-y-4 text-xl">
                    <Link className="flex px-4 py-2 space-x-2 items-center hover:bg-gray-400 rounded-lg hover:text-gray-800" to="/" onClick={toggleMenu}>
                        <MdOutlineSpaceDashboard />
                        <span>Dashboard</span>
                    </Link>
                    <Link className="flex px-4 py-2 space-x-2 items-center hover:bg-gray-400 rounded-lg hover:text-gray-800" to="/protection" onClick={toggleMenu}>
                        <MdOutlineLock />
                        <span>Protection</span>
                    </Link>
                    <Link className="flex px-4 py-2 space-x-2 items-center hover:bg-gray-400 rounded-lg hover:text-gray-800" to="/privacy" onClick={toggleMenu}>
                        <MdOutlinePrivacyTip />
                        <span>Privacy</span>
                    </Link>
                </nav>
            </aside>
            <div className="sm:col-span-4">
                <div className="flex justify-between bg-gray-200 p-4 items-center sm:hidden">
                    {isMenuOpen ? (
                        <MdClose className="text-xl" onClick={toggleMenu} />
                    ) : (
                        <MdMenu className="text-xl" onClick={toggleMenu} />
                    )}
                    <span>GD<span className="font-serif italic decoration-slate-100">scanner</span></span>
                    <div></div>
                </div>
                <div className="sm:block">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default App;
