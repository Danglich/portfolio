import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import NightlightIcon from '@mui/icons-material/Nightlight';

function ThemeBtn() {
    const [dark, setDark] = useState(true);

    const toggleSetDark = useCallback(() => {
        setDark(!dark);
    }, [dark]);

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            setDark(false);
        } else {
            setDark(true);
        }
    }, []);

    useEffect(() => {
        if (dark) {
            localStorage.removeItem('theme');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    }, [dark]);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    }, [dark]);

    return (
        <div
            onClick={toggleSetDark}
            className="w-[50px] h-[50px] cursor-pointer rounded-full top-[26px] right-[44px] max-md:top-[14px]  max-md:right-[14px]  flex items-center justify-center fixed z-[1001] bg-[#252525]"
        >
            {dark && <LightbulbIcon className="text-white dark:text-[#555]" />}
            {!dark && <NightlightIcon className="text-white " />}
        </div>
    );
}

export default ThemeBtn;
