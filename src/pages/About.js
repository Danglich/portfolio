import Curtain from '../components/Curtain';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Button from '../components/Button';
import AddIcon from '@mui/icons-material/Add';
import { skills } from '../data';
import SkillItem from '../components/SkillItem';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useEffect } from 'react';

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                                                L???ch
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
                                                ?????i h???c B??ch Khoa H?? N???i
                                            </h1>
                                            <p className="mt-[16px]">
                                                V??o th??ng 8 n??m 2020 t??i b???t ?????u
                                                h???c t???i ?????i h???c B??ch Khoa H?? N???i
                                                chuy??n ng??nh K??? thu???t ??i???u khi???n
                                                v?? t??? ?????ng h??a
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
                                                ?????i h???c B??ch Khoa H?? N???i
                                            </h1>
                                            <p className="mt-[16px]">
                                                V??o k??? 2 n??m nh???t t??i c?? h???c m??n
                                                Tin h???c ?????i c????ng ??? tr?????ng, t???
                                                ???? t??i bi???t ?????n l???p tr??nh C v??
                                                t??i b???t ?????u th??ch n?? v?? t??? t??m
                                                ki???m t??i li???u tr??n m???ng ????? h???c
                                                th??m
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
                                                ?????i h???c B??ch Khoa H?? N???i
                                            </h1>
                                            <p className="mt-[16px]">
                                                ??ang l??c m??ng lung kh??ng bi???t
                                                nh???ng thu???t to??n c?? th??? ???ng d???ng
                                                th???c t??? nh?? th??? n??o th?? t??i bi???t
                                                ?????n F8 (M???t trang web h???c l???p
                                                tr??nh web mi???n ph??). Sau m???t
                                                th??ng h???c tr??n ?????y th?? t??i ho??n
                                                th??nh xong kh??a HTML, CSS c?? b???n
                                                v?? l??m m???t trang web c?? b???n
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
                                                ?????i h???c B??ch Khoa H?? N???i
                                            </h1>
                                            <p className="mt-[16px]">
                                                Sau khi h???c xong kh??a HTML, CSS
                                                c?? b???n tr??n F8 , t??i h???c th??m
                                                Java v?? l??m ???????c m???t trang b??n
                                                h??ng c?? b???n
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
                                                ?????i h???c B??ch Khoa H?? N???i
                                            </h1>
                                            <p className="mt-[16px]">
                                                ?????n th??ng 8/2021 t??i b???t ?????u c???m
                                                th???y lo l???ng v?? nh???ng th??? t??i t???
                                                h???c kh??ng li??n quan ?????n ng??nh
                                                h???c c???a m??nh. Xong t??i quy???t
                                                ?????nh chuy???n sang h???c v??? AI ?????
                                                g???n v???i ng??nh ch??nh c???a t??i h??n
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
                                                ?????i h???c B??ch Khoa H?? N???i
                                            </h1>
                                            <p className="mt-[16px]">
                                                Sau g???n 1 n??m t??? h???c v??? AI t??i
                                                ???? ???????c 4 ch???ng ch??? ho??n th??nh
                                                kh??a h???c tr??n Cousera . Nh??ng
                                                r???i t??i nh???n ra r???ng n???u m??nh
                                                kh??ng h???c cao h???c th?? s??? kh?? t??m
                                                vi???c v???i ng??nh n??y. Sau ???? t??i
                                                v?? t??nh ?????c ???????c b??i chia s???
                                                tr??n m???ng v??? vi???c l??m tr??i ng??nh
                                                tr??n m???ng , h??? v???n c?? th??? l??m
                                                t???t , h??? c?? th??? ch???ng minh n??ng
                                                l???c b???ng s???n ph???m c???a m??nh. Qua
                                                b??i chia s??? t??i c???m th???y quy???t
                                                t??m theo ??u???i ??am m?? c???a m??nh
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
                                                ?????i h???c B??ch Khoa H?? N???i
                                            </h1>
                                            <p className="mt-[16px]">
                                                Sau ???? t??i quy???t ?????nh quay l???i
                                                trang F8 ????? h???c ti???p nh???ng kh??a
                                                h???c v??? JavaScript , React .
                                                Ngo??i vi???c h???c tr??n F8 , t??i c??n
                                                t??m ki???m ??? r???t nhi???u ngu???n kh??c
                                                . V?? ???? h???c l???p tr??nh t??? n??m
                                                nh???t n??n t??i h???c kh?? nhanh. ?????n
                                                nay t??i ???? t??? l??m ra ???????c tr??n 4
                                                s???n ph???m kh?? ch???t l?????ng
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
