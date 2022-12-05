function SkillItem({ image, name }) {
    return (
        <div
            data-aos-duration="1200"
            data-aos="fade-up"
            className="w-[25%] max-md:w-[50%] flex flex-col pt-[36px] items-center justify-center"
        >
            <div className="w-[120px] hover:scale-105 transition-all duration-[300ms] ease h-[120px] bg-[#252525] flex items-center justify-center rounded-full">
                <img className="w-[60%] h-[60%] " alt="" src={image}></img>
            </div>
            <h2 className="text-center text-white dark:text-[#555] uppercase mt-[16px]">
                {name}
            </h2>
        </div>
    );
}

export default SkillItem;
