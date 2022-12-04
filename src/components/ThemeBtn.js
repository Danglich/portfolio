import LightbulbIcon from '@mui/icons-material/Lightbulb';

function ThemeBtn() {
    return (
        <div className="w-[50px] h-[50px] cursor-pointer rounded-full top-[26px] right-[44px] max-md:top-[14px]  max-md:right-[14px]  flex items-center justify-center fixed z-[999] bg-[#252525]">
            <LightbulbIcon className="text-white" />
        </div>
    );
}

export default ThemeBtn;
