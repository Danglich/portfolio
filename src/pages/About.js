import Curtain from '../components/Curtain';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Button from '../components/Button';
import AddIcon from '@mui/icons-material/Add';
import { skills } from '../data';
import SkillItem from '../components/SkillItem';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

function About() {
    return (
        <>
            <div className="bg-[#111] dark:bg-white min-h-[100vh]">
                <h1 className="relative  animate-[fadeUp_0.7s_linear]  tracking-[16px] font-[900] text-[116px] max-md:text-[64px]  max-sm:tracking-[5px] max-sm:text-[58px] text-[#232323] dark:text-[#1e253012] text-center py-[40px]">
                    RESUME
                    <div className="absolute w-full flex justify-center top-[50%] translate-y-[-50%]">
                        <span className=" tracking-[2px] font-[800] text-white dark:text-[#555] text-[56px]  max-md:text-[30px]">
                            ABOUT
                        </span>
                        <span className="font-[800]  max-md:text-[30px]  tracking-[2px] text-[#ffb400] dark:text-[#72b626] text-[56px] ml-[16px] inline-block">
                            ME
                        </span>
                    </div>
                </h1>
                <div className="flex justify-center  animate-[fadeUp_0.7s_linear] ">
                    <div className="w-[1200px] max-xl:w-[100vw]">
                        <div className="flex  max-lg:block  gap-[32px] max-lg:mx-[20px] max-md:mb-[14px] max-md:mx-[14px] mb-[28px]">
                            <div
                                data-aos="fade-right"
                                data-aos-duration="1200"
                                className="flex-1 text-white dark:text-[#555]  max-lg:mb-[42px] px-[8px]"
                            >
                                <h1 className="text-[28px] font-[600] mb-[16px]">
                                    PERSONAL INFOS
                                </h1>
                                <div className="flex gap-[24px] max-sm:block">
                                    <div className="flex-1">
                                        <p className="text-[#ccc] py-[8px]">
                                            First Name:{' '}
                                            <span className="text-white dark:text-[#555] font-[500]">
                                                Lịch
                                            </span>
                                        </p>
                                        <p className="text-[#ccc]  py-[8px]">
                                            Birthday:{' '}
                                            <span className="text-white dark:text-[#555] font-[500]">
                                                21 Years
                                            </span>
                                        </p>
                                        <p className="text-[#ccc]  py-[8px]">
                                            National:{' '}
                                            <span className="text-white dark:text-[#555] font-[500]">
                                                VietName
                                            </span>
                                        </p>
                                        <p className="text-[#ccc]  py-[8px]">
                                            Email:{' '}
                                            <span className="text-white dark:text-[#555] font-[500]">
                                                nguyendanglich30@gmail.com
                                            </span>
                                        </p>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[#ccc] py-[8px]">
                                            Last Name:{' '}
                                            <span className="text-white dark:text-[#555] font-[500]">
                                                Nguyen Dang
                                            </span>
                                        </p>
                                        <p className="text-[#ccc]  py-[8px]">
                                            Sex:{' '}
                                            <span className="text-white dark:text-[#555] font-[500]">
                                                Male
                                            </span>
                                        </p>
                                        <p className="text-[#ccc]  py-[8px]">
                                            Address:{' '}
                                            <span className="text-white dark:text-[#555] font-[500]">
                                                Hanoi
                                            </span>
                                        </p>
                                        <p className="text-[#ccc]  py-[8px]">
                                            Phone:{' '}
                                            <span className="text-white dark:text-[#555] font-[500]">
                                                0338864xxx
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-[20px]">
                                    <Button
                                        Icon={FileDownloadIcon}
                                        title="DOWNLOAD CV"
                                    />
                                </div>
                            </div>
                            <div
                                data-aos="fade-left"
                                data-aos-duration="1200"
                                className="flex-[1] flex flex-wrap justify-between"
                            >
                                <div className="w-[calc(50%-15px)]  mb-[30px] pt-[20px] pb-[25px] px-[40px] border-[1px] border-[#252525] rounded-[5px]">
                                    <div className="text-[#ffb400] dark:text-[#72b626] font-[800] flex items-start">
                                        <span className="text-[52px] leading-[52px]">
                                            1
                                        </span>
                                        <AddIcon className="h-[32px!important] w-[32px!important]" />
                                    </div>
                                    <div className="flex items-center  mt-[8px]">
                                        <span className="h-[1px] w-[30px] block bg-[#777] mr-[16px]"></span>
                                        <p className="text-white dark:text-[#555]">
                                            YEARS OF EXPERIENCE
                                        </p>
                                    </div>
                                </div>
                                <div className="w-[calc(50%-15px)]  mb-[30px] pt-[20px] pb-[25px] px-[40px] border-[1px] border-[#252525] rounded-[5px]">
                                    <div className="text-[#ffb400] dark:text-[#72b626] font-[800] flex items-start">
                                        <span className="text-[52px] leading-[52px]">
                                            6
                                        </span>
                                        <AddIcon className="h-[32px!important] w-[32px!important]" />
                                    </div>
                                    <div className="flex items-center  mt-[8px]">
                                        <span className="h-[1px] w-[30px] block bg-[#777] mr-[16px]"></span>
                                        <p className="text-white dark:text-[#555]">
                                            COMPLETED PROJECTS
                                        </p>
                                    </div>
                                </div>
                                <div className="w-[calc(50%-15px)]  mb-[30px] pt-[20px] pb-[25px] px-[40px] border-[1px] border-[#252525] rounded-[5px]">
                                    <div className="text-[#ffb400] dark:text-[#72b626] font-[800] flex items-start">
                                        <span className="text-[52px] leading-[52px]">
                                            1
                                        </span>
                                        <AddIcon className="h-[32px!important] w-[32px!important]" />
                                    </div>
                                    <div className="flex items-center  mt-[8px]">
                                        <span className="h-[1px] w-[30px] block bg-[#777] mr-[16px]"></span>
                                        <p className="text-white dark:text-[#555]">
                                            HAPPY CUSTOMER
                                        </p>
                                    </div>
                                </div>
                                <div className="w-[calc(50%-15px)]  mb-[30px] pt-[20px] pb-[25px] px-[40px] border-[1px] border-[#252525] rounded-[5px]">
                                    <div className="text-[#ffb400] dark:text-[#72b626] font-[800] flex items-start">
                                        <span className="text-[52px] leading-[52px]">
                                            1
                                        </span>
                                        <AddIcon className="h-[32px!important] w-[32px!important]" />
                                    </div>
                                    <div className="flex items-center  mt-[8px]">
                                        <span className="h-[1px] w-[30px] block bg-[#777] mr-[16px]"></span>
                                        <p className="text-white dark:text-[#555]">
                                            AWARD WON
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[110px] ">
                            <h1 className="text-white dark:text-[#555] text-[28px] font-[600] text-center mb-[16px]">
                                MY SKILLS
                            </h1>
                            <div className="flex flex-wrap">
                                {skills.map((item) => (
                                    <SkillItem
                                        key={item.name}
                                        name={item.name}
                                        image={item.image}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="mt-[110px] mb-[60px]">
                            <h1 className="text-white dark:text-[#555] text-[28px] mb-[36px] font-[600] text-center">
                                EDUCATION & EXPERIENCE
                            </h1>
                            <div className="flex gap-[32px] max-lg:block px-[16px]">
                                <div className="flex-1">
                                    <div
                                        className="flex mb-[40px]"
                                        data-aos-duration="1200"
                                        data-aos="fade-right"
                                    >
                                        <div className="flex flex-col items-center justify-center mr-[16px]">
                                            <div className="w-[40px] h-[40px] bg-[#ffb400] dark:bg-[#72b626] rounded-full flex items-center justify-center text-white dark:text-[#555]">
                                                <BusinessCenterIcon />
                                            </div>
                                            <div className="h-[calc(100%-40px)] w-[1px] bg-[#252525]"></div>
                                        </div>

                                        <div className="text-white dark:text-[#555]">
                                            <span className="inline-block bg-[#252525] rounded-[8px] text-[13px] text-[#ccc] px-[10px] py-[2px]">
                                                8/2020
                                            </span>
                                            <h1 className="text-white dark:text-[#555] font-[600] text-[18px] mt-[16px] uppercase">
                                                Đại học Bách Khoa Hà Nội
                                            </h1>
                                            <p className="mt-[16px]">
                                                Vào tháng 8 năm 2020 tôi bắt đầu
                                                học tại Đại học Bách Khoa Hà Nội
                                                chuyên ngành Kỹ thuật điều khiển
                                                và tự động hóa
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex mb-[40px]"
                                        data-aos-duration="1200"
                                        data-aos="fade-right"
                                    >
                                        <div className="flex flex-col items-center justify-center mr-[16px]">
                                            <div className="w-[40px] h-[40px] bg-[#ffb400] dark:bg-[#72b626] rounded-full flex items-center justify-center text-white dark:text-[#555]">
                                                <BusinessCenterIcon />
                                            </div>
                                            <div className="h-[calc(100%-40px)] w-[1px] bg-[#252525]"></div>
                                        </div>

                                        <div className="text-white dark:text-[#555]">
                                            <span className="inline-block bg-[#252525] rounded-[8px] text-[13px] text-[#ccc] px-[10px] py-[2px]">
                                                3/2021
                                            </span>
                                            <h1 className="text-white dark:text-[#555] font-[600] text-[18px] mt-[16px] uppercase">
                                                Đại học Bách Khoa Hà Nội
                                            </h1>
                                            <p className="mt-[16px]">
                                                Vào kỳ 2 năm nhất tôi có học môn
                                                Tin học đại cương ở trường, từ
                                                đó tôi biết đến lập trình C và
                                                tôi bắt đầu thích nó và tự tìm
                                                kiếm tài liệu trên mạng để học
                                                thêm
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex mb-[40px]"
                                        data-aos-duration="1200"
                                        data-aos="fade-right"
                                    >
                                        <div className="flex flex-col items-center justify-center mr-[16px]">
                                            <div className="w-[40px] h-[40px] bg-[#ffb400] dark:bg-[#72b626] rounded-full flex items-center justify-center text-white dark:text-[#555]">
                                                <BusinessCenterIcon />
                                            </div>
                                            <div className="h-[calc(100%-40px)] w-[1px] bg-[#252525]"></div>
                                        </div>

                                        <div className="text-white dark:text-[#555]">
                                            <span className="inline-block bg-[#252525] rounded-[8px] text-[13px] text-[#ccc] px-[10px] py-[2px]">
                                                5/2021
                                            </span>
                                            <h1 className="text-white dark:text-[#555] font-[600] text-[18px] mt-[16px] uppercase">
                                                Đại học Bách Khoa Hà Nội
                                            </h1>
                                            <p className="mt-[16px]">
                                                Đang lúc mông lung không biết
                                                những thuật toán có thể ứng dụng
                                                thực tế như thế nào thì tôi biết
                                                đến F8 (Một trang web học lập
                                                trình web miễn phí). Sau một
                                                tháng học trên đấy thì tôi hoàn
                                                thành xong khóa HTML, CSS cơ bản
                                                và làm một trang web cơ bản
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex mb-[40px]"
                                        data-aos-duration="1200"
                                        data-aos="fade-right"
                                    >
                                        <div className="flex flex-col items-center justify-center mr-[16px]">
                                            <div className="w-[40px] h-[40px] bg-[#ffb400] dark:bg-[#72b626] rounded-full flex items-center justify-center text-white dark:text-[#555]">
                                                <BusinessCenterIcon />
                                            </div>
                                            <div className="h-[calc(100%-40px)] w-[1px] bg-[#252525]"></div>
                                        </div>

                                        <div className="text-white dark:text-[#555]">
                                            <span className="inline-block bg-[#252525] rounded-[8px] text-[13px] text-[#ccc] px-[10px] py-[2px]">
                                                6/2021
                                            </span>
                                            <h1 className="text-white dark:text-[#555] font-[600] text-[18px] mt-[16px] uppercase">
                                                Đại học Bách Khoa Hà Nội
                                            </h1>
                                            <p className="mt-[16px]">
                                                Sau khi học xong khóa HTML, CSS
                                                cơ bản trên F8 , tôi học thêm
                                                Java và làm được một trang bán
                                                hàng cơ bản
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div
                                        className="flex mb-[40px]"
                                        data-aos-duration="1200"
                                        data-aos="fade-left"
                                    >
                                        <div className="flex flex-col items-center justify-center mr-[16px]">
                                            <div className="w-[40px] h-[40px] bg-[#ffb400] dark:bg-[#72b626] rounded-full flex items-center justify-center text-white dark:text-[#555]">
                                                <BusinessCenterIcon />
                                            </div>
                                            <div className="h-[calc(100%-40px)] w-[1px] bg-[#252525]"></div>
                                        </div>

                                        <div className="text-white dark:text-[#555]">
                                            <span className="inline-block bg-[#252525] rounded-[8px] text-[13px] text-[#ccc] px-[10px] py-[2px]">
                                                8/2021
                                            </span>
                                            <h1 className="text-white dark:text-[#555] font-[600] text-[18px] mt-[16px] uppercase">
                                                Đại học Bách Khoa Hà Nội
                                            </h1>
                                            <p className="mt-[16px]">
                                                Đến tháng 8/2021 tôi bắt đầu cảm
                                                thấy lo lắng vì những thứ tôi tự
                                                học không liên quan đến ngành
                                                học của mình. Xong tôi quyết
                                                định chuyển sang học về AI để
                                                gần với ngành chính của tôi hơn
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex mb-[40px]"
                                        data-aos-duration="1200"
                                        data-aos="fade-left"
                                    >
                                        <div className="flex flex-col items-center justify-center mr-[16px]">
                                            <div className="w-[40px] h-[40px] bg-[#ffb400] dark:bg-[#72b626] rounded-full flex items-center justify-center text-white dark:text-[#555]">
                                                <BusinessCenterIcon />
                                            </div>
                                            <div className="h-[calc(100%-40px)] w-[1px] bg-[#252525]"></div>
                                        </div>

                                        <div className="text-white dark:text-[#555]">
                                            <span className="inline-block bg-[#252525] rounded-[8px] text-[13px] text-[#ccc] px-[10px] py-[2px]">
                                                8/2021 - 3/2022
                                            </span>
                                            <h1 className="text-white dark:text-[#555] font-[600] text-[18px] mt-[16px] uppercase">
                                                Đại học Bách Khoa Hà Nội
                                            </h1>
                                            <p className="mt-[16px]">
                                                Sau gần 1 năm tự học về AI tôi
                                                đã được 4 chứng chỉ hoàn thành
                                                khóa học trên Cousera . Nhưng
                                                rồi tôi nhận ra rằng nếu mình
                                                không học cao học thì sẽ khó tìm
                                                việc với ngành này. Sau đó tôi
                                                vô tình đọc được bài chia sẻ
                                                trên mạng về việc làm trái ngành
                                                trên mạng , họ vẫn có thể làm
                                                tốt , họ có thể chứng minh năng
                                                lực bằng sản phẩm của mình. Qua
                                                bài chia sẻ tôi cảm thấy quyết
                                                tâm theo đuổi đam mê của mình
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex mb-[40px]"
                                        data-aos-duration="1200"
                                        data-aos="fade-left"
                                    >
                                        <div className="flex flex-col items-center justify-center mr-[16px]">
                                            <div className="w-[40px] h-[40px] bg-[#ffb400] dark:bg-[#72b626] rounded-full flex items-center justify-center text-white dark:text-[#555]">
                                                <BusinessCenterIcon />
                                            </div>
                                            <div className="h-[calc(100%-40px)] w-[1px] bg-[#252525]"></div>
                                        </div>

                                        <div className="text-white dark:text-[#555]">
                                            <span className="inline-block bg-[#252525] rounded-[8px] text-[13px] text-[#ccc] px-[10px] py-[2px]">
                                                3/2022 - Nay
                                            </span>
                                            <h1 className="text-white dark:text-[#555] font-[600] text-[18px] mt-[16px] uppercase">
                                                Đại học Bách Khoa Hà Nội
                                            </h1>
                                            <p className="mt-[16px]">
                                                Sau đó tôi quyết định quay lại
                                                trang F8 để học tiếp những khóa
                                                học về JavaScript , React .
                                                Ngoài việc học trên F8 , tôi còn
                                                tìm kiếm ở rất nhiều nguồn khác
                                                . Vì đã học lập trình từ năm
                                                nhất nên tôi học khá nhanh. Đến
                                                nay tôi đã tự làm ra được trên 4
                                                sản phẩm khá chất lượng
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Curtain />
        </>
    );
}

export default About;
