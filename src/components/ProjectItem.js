import { useCallback } from 'react';
import { useState } from 'react';
import ModalProject from './ModalProject';

function ProjectItem({ project }) {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = useCallback(() => {
        setIsShowing(!isShowing);
    }, [isShowing]);

    return (
        <>
            <div
                onClick={() => {
                    setIsShowing(true);
                }}
                className="relative group cursor-pointer pt-[62.5%] bg-no-repeat bg-center bg-cover bg-[url('https://firebasestorage.googleapis.com/v0/b/webtra-20bcb.appspot.com/o/images%2Fpf-anh1.jpg?alt=media&token=00cf4811-4057-45de-a136-be6bede9afbd')] rounded-[6px]"
                style={{ backgroundImage: `url(${project.images[0]});` }}
            >
                <div className="opacity-[0] group-hover:opacity-[1] transition-all duration-500 ease  rounded-[6px] absolute h-full w-full top-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center text-white  font-[600] tracking-[2px] text-[18px]">
                    <h1 className="translate-y-[60%] group-hover:translate-y-[0]  transition-all duration-500 ease ">
                        {project.name}
                    </h1>
                </div>
            </div>
            <ModalProject
                isShowing={isShowing}
                toggle={toggle}
                project={project}
            />
        </>
    );
}

export default ProjectItem;
