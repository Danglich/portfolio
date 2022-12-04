function Button({ Icon, title, className, onClick, link }) {
    return (
        <div
            onClick={onClick ? onClick : null}
            className={`relative group cursor-pointer h-[52px] bg-[#111] rounded-[26px] border-[1px] border-[#ffb400] inline-flex items-center + ${className}`}
        >
            <span className="transition-[padding] uppercase duration-[350ms] tracking-[1px] text-white font-[500] relative group-hover:z-[2]  pl-[64px] pr-[32px]  group-hover:pl-[32px] group-hover:pr-[64px]">
                {title}
            </span>
            <div className="absolute transition-[width]  duration-[350ms] tracking-[1px]  z-[1] bg-[#ffb400] group-hover:w-full left-[0] h-full flex items-center justify-center group-hover:justify-end group-hover:pr-[16px] w-[50px] rounded-[25px]">
                <Icon className="text-white " />
            </div>
        </div>
    );
}

export default Button;
