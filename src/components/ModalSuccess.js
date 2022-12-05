import ReactDOM from 'react-dom';
import DoneIcon from '@mui/icons-material/Done';
function ModalSuccess({ isShowing, toggle, project }) {
    return isShowing
        ? ReactDOM.createPortal(
              <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-[1000]">
                  <div className="bg-white  shadow-[0_0px_7px_rgba(0,0,0,0.9)]  relative w-[416px] max-sm:w-full rounded-[2px] pt-[70px] px-[16px] pb-[16px] text-center">
                      <h1 className="text-[36px] text-[#333] font-[600]">
                          Success!
                      </h1>
                      <p className="text-[14px] font-[300]">
                          We've sent a confirmation to your e-mail for
                          verification.
                      </p>
                      <div className="mt-[16px] mb-[6px]">
                          <button
                              onClick={toggle}
                              className="w-[80%] bg-[white] hover:bg-[#4caf50] hover:text-white dark:text-[#555] transition-all duration-[300ms] text-[#4caf50] py-[3px] border-[1px] border-[#4caf50] rounded-[30px]"
                          >
                              OK
                          </button>
                      </div>
                      <p className="text-[11.5px] text-[#888]">
                          -- Click to close the modal --
                      </p>
                      <div className="animate-[scale_0.3s_ease] bg-[#4caf50] h-[100px] absolute top-[-50px] left-[50%] translate-x-[-50%] w-[100px] rounded-full  flex items-center justify-center">
                          <DoneIcon className="w-[64px!important] h-[64px!important] text-[white]" />
                      </div>
                  </div>
              </div>,
              document.body,
          )
        : null;
}

export default ModalSuccess;
