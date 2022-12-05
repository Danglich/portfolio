import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PersonIcon from '@mui/icons-material/Person';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
    const navItems = [
        {
            Icon: (
                <HomeIcon className="text-white dark:text-[#555] relative z-[100] h-[50px]" />
            ),
            title: 'home',
            link: '/',
        },
        {
            Icon: (
                <BusinessCenterIcon className="text-white dark:text-[#555] relative z-[100] h-[50px]" />
            ),
            title: 'portfolio',
            link: '/portfolio',
        },
        {
            Icon: (
                <PersonIcon className="text-white dark:text-[#555] relative z-[100] h-[50px]" />
            ),
            title: 'about',
            link: '/about',
        },
        {
            Icon: (
                <DraftsIcon className="text-white dark:text-[#555] relative z-[100] h-[50px]" />
            ),
            title: 'contact',
            link: '/contact',
        },
    ];

    const [currentPage, setCurrentPage] = useState('/');

    const location = useLocation();

    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location]);

    return (
        <div className="fixed z-[1000] max-lg:left-0 max-lg:bg-[#2b2a2a]  max-lg:bottom-0 max-lg:h-auto max-lg:top-auto max-lg:w-[100vw] px-[16px] h-[100vh] right-0 top-0 flex  items-center justify-center">
            <ul className="max-lg:flex justify-between w-full max-lg:px-[24px]">
                {navItems.map((item) => {
                    if (currentPage === item.link) {
                        return (
                            <>
                                <Link
                                    to={item.link}
                                    key={item.title}
                                    className="btn-active group max-lg:my-[6px] relative cursor-pointer w-[50px] bg-[#2b2a2a] dark:bg-[#eee] h-[50px] rounded-full flex items-center justify-center my-[16px] z-[100]"
                                >
                                    {item.Icon}
                                    <div className="max-lg:hidden absolute z-[1] rounded-[25px] w-[50px] opacity-[0] group-hover:opacity-[1] group-hover:w-[auto]  transition-all duration-[450ms] ease-in-out bg-[#ffb400] dark:bg-[#72b626] h-[50px] flex items-center justify-center right-0 top-0">
                                        <span className="opacity-[0] relative group-hover:opacity-[1] group-hover:z-[1] group-hover:translate-x-[0] translate-x-[40px] transition-all duration-[450ms] ease-in-out  uppercase text-[white]  font-[500] z-[-1] pl-[22px] pr-[60px]">
                                            {item.title}
                                        </span>
                                    </div>
                                </Link>
                            </>
                        );
                    } else {
                        return (
                            <>
                                <Link
                                    to={item.link}
                                    key={item.title}
                                    className=" group  max-lg:my-[6px] relative cursor-pointer w-[50px] bg-[#2b2a2a]  dark:bg-[#eee] h-[50px] rounded-full flex items-center justify-center my-[16px] z-[100]"
                                >
                                    {item.Icon}
                                    <div className="max-lg:hidden absolute z-[1] rounded-[25px] w-[50px] opacity-[0] group-hover:opacity-[1] group-hover:w-[auto]  transition-all duration-[450ms] ease-in-out bg-[#ffb400] dark:bg-[#72b626] h-[50px] flex items-center justify-center right-0 top-0">
                                        <span className="opacity-[0] relative group-hover:opacity-[1] group-hover:z-[1] group-hover:translate-x-[0] translate-x-[40px] transition-all duration-[450ms] ease-in-out  uppercase text-[white]  font-[500] z-[-1] pl-[22px] pr-[60px]">
                                            {item.title}
                                        </span>
                                    </div>
                                </Link>
                            </>
                        );
                    }
                })}
            </ul>
        </div>
    );
}

export default Navbar;
