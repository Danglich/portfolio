import ReactDOM from 'react-dom';
import SlideImage from './SliderImage';
import CloseIcon from '@mui/icons-material/Close';

function ModalProject({ isShowing, toggle, project }) {
    return isShowing
        ? ReactDOM.createPortal(
              <div className="fixed top-0 left-0 right-0 z-[1000]  max-xl:px-[16px] h-[100vh] overflow-auto ">
                  <div
                      onClick={toggle}
                      className="absolute animate-[lighting_0.4s_ease] w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.4)]"
                  ></div>
                  <div className="w-[1200px] animate-[fadeDown_0.5s_ease] px-[30px] mb-[80px] py-[30px] mx-auto max-lg:block relative z-[1001] mt-[80px] max-xl:w-full bg-[#252525] rounded-[8px] flex gap-[24px]">
                      <div className="flex-1 ">
                          <h1 className="font-[800] text-[#ffb400] text-[32px] max-sm:text-[24px] inline-block w-full relative">
                              <span className="relative">
                                  MIKIYA KOBAYASHI
                                  <span className="block h-[3px] bg-[#ffb400] w-[50%] z-[1] bottom-[-3px] absolute"></span>
                              </span>
                              <span className="block h-[3px] bg-[#5e5c5c] w-full bottom-[-2px] absolute"></span>
                          </h1>

                          <div className="relative">
                              <SlideImage project={project} />
                          </div>
                      </div>
                      <div className="flex-1 ">
                          <h1 className="font-[800] text-[#ffb400] text-[32px]  max-sm:text-[24px] inline-block w-full relative">
                              <span className="relative">
                                  DETAILS
                                  <span className="block h-[3px] bg-[#ffb400] w-[50%] z-[1] bottom-[-3px] absolute"></span>
                              </span>
                              <span className="block h-[3px] bg-[#5e5c5c] w-full bottom-[-2px] absolute"></span>
                          </h1>
                          <p className="mt-[16px] text-white">{project.desc}</p>
                          <p className="text-white mt-[12px] font-[300]">
                              Created - <span>{project.createdAt}</span>
                          </p>
                          <p className="text-white mt-[12px] font-[300]">
                              Frontend - <span>{project.fontend}</span>
                          </p>
                          <p className="text-white mt-[12px] font-[300]">
                              Backend - <span>{project.backend}</span>
                          </p>
                          <p className="text-white mt-[12px] font-[300]">
                              Demo -{' '}
                              <a
                                  className="text-[#ffb400]"
                                  href={`${project.link}`}
                                  target="_blank"
                                  rel="noreferrer"
                              >
                                  {project.link}
                              </a>
                          </p>
                      </div>

                      <div
                          onClick={toggle}
                          className="w-[50px] absolute  top-[-20px] right-[-20px] flex items-center justify-center cursor-pointer h-[50px] rounded-full bg-[hsla(0,0%,100%,0.1)] shadow-3xl"
                      >
                          <CloseIcon className="text-[#ffb400]" />
                      </div>
                  </div>
              </div>,
              document.body,
          )
        : null;
}

export default ModalProject;
