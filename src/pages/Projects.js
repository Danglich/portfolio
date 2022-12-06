import { useEffect } from 'react';
import Curtain from '../components/Curtain';
import ProjectItem from '../components/ProjectItem';
import { projects } from '../data';

function Project() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="bg-[#111] dark:bg-white min-h-[100vh]">
                <h1 className="relative  animate-[fadeUp_0.7s_linear]  tracking-[16px] font-[900] text-[116px] max-md:text-[64px] max-sm:tracking-[5px]  max-sm:text-[58px] text-[#232323] dark:text-[#1e253012] text-center py-[40px]">
                    WORKS
                    <div className="absolute w-full flex justify-center top-[50%] translate-y-[-50%]">
                        <span className=" tracking-[2px] font-[800] text-white dark:text-[#555] text-[56px]  max-md:text-[30px]">
                            MY
                        </span>
                        <span className="font-[800]  max-md:text-[30px]  tracking-[2px] text-[#ffb400] dark:text-[#72b626] text-[56px] ml-[16px] inline-block">
                            PORTFOLIO
                        </span>
                    </div>
                </h1>
                <div className="flex justify-center pb-[40px]  animate-[fadeUp_0.7s_linear] ">
                    <div className="mx-auto cursor-pointer inline-block text-white dark:text-[#555] px-[16px] py-[4px] rounded-[5px] bg-[#ffb400] dark:bg-[#72b626]">
                        ALL
                    </div>
                </div>
                <div className="flex justify-center  animate-[fadeUp_0.7s_linear] ">
                    <div className="w-[1224px] flex flex-wrap max-lg:mx-[20px] max-md:mb-[14px]  max-md:mx-[14px] mb-[28px]">
                        {projects.map((project, index) => (
                            <div
                                key={project.name}
                                className=" w-[33.33333%] max-lg:w-[50%] max-md:w-full "
                            >
                                <div
                                    className={`project-item mx-[12px] mb-[22px] max-md:mb-[28px] animate-[fadeLeft_0.35s_ease-in-out]  `}
                                    style={{
                                        animationDelay: `${
                                            (index + 1) * 100
                                        }ms`,
                                    }}
                                >
                                    <ProjectItem project={project} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Curtain />
        </>
    );
}

export default Project;
