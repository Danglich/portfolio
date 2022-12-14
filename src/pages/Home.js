import Button from '../components/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Curtain from '../components/Curtain';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="h-[100vh] w-[100vw] bg-[#111] dark:bg-white  overflow-hidden relative max-lg:overflow-auto max-lg:h-[auto]">
                <div className="h-[1400px] absolute bg-[#ffb400] dark:bg-[#72b626] w-[600px] rotate-[-15deg] translate-x-[-250px] max-lg:translate-x-[-320px] max-lg:hidden"></div>

                <div className="animate-[fadeUp_0.7s_linear] flex relative z-[2] items-center h-[100%] max-lg:flex-col max-lg:justify-center ">
                    <div className="flex-[1] px-[60px] max-sm:px-[0] shrink-0 max-lg:pt-[80px] max-lg:pb-[30px]">
                        <img
                            src="https://symbols.vn/wp-content/uploads/2022/01/Hinh-Anime-Naruto-cute-de-thuong-nhat.png"
                            alt=""
                            className="w-full rounded-[20px] shadow-[0_0px_7px_rgba(0,0,0,0.9)]  max-lg:rounded-full max-lg:h-[270px] max-lg:w-[270px]"
                        />
                    </div>
                    <div className="flex-[2] pl-[60px] pr-[160px] max-lg:px-[96px] max-sm:px-[14px]">
                        <div className="flex items-center ">
                            <span className="h-[4px] w-[40px] bg-[#ffb400] dark:bg-[#72b626] rounded-[2px]  max-lg:hidden"></span>
                            <h1 className="text-[#ffb400] dark:text-[#72b626] relative font-[700] text-[46px] ml-[34px] tracking-[2px]  max-lg:text-[36px] max-xl:text-center max-xl:w-full">
                                I'm Dang Lich
                            </h1>
                        </div>
                        <h1 className="text-white dark:text-[#555] font-[700] text-[46px] ml-[76px] mb-[20px] tracking-[2px]   max-lg:text-[36px] max-xl:mx-[0] max-xl:text-center  ">
                            Web Developer !
                        </h1>
                        <p className="text-white dark:text-[#555] leading-[34px] tracking-[0.5px] max-sm:pb-[16px] max-lg:text-center">
                            Hello m???i ng?????i! M??nh l?? L???ch, ??ang l?? sinh vi??n n??m
                            3 tr?????ng ?????i h???c B??ch Khoa H?? N???i chuy??n ng??nh ??i???u
                            khi???n - T??? ?????ng h??a. C?? duy??n m??nh ?????n v???i IT l?? sau
                            khi h???c m??n Tin h???c ?????i c????ng h???i n??m nh???t. M??nh
                            ???????c h???c ng??n ng??? l???p tr??nh C c?? b???n, qua ???? th??
                            m??nh th???y m??nh th??ch l???p tr??nh v?? t??? t??m t??i, h???c
                            h???i th??m . Th??ng 5/2021, t??nh c??? bi???t ?????n c???ng ?????ng
                            F8 Fullstack c???a anh S??n, m??nh ???? ho??n th??nh c??c
                            kh??a h???c HTML, CSS , JavaScript, ReactJS v?? c?? ???????c
                            m???t s??? d??? ??n c?? nh??n. Tr???i qua nhi???u cay ?????ng, th???t
                            s??? c???m ??n anh S??n c??ng nh?? c???ng ?????ng anh em ????ng g??p
                            ???? truy???n ?????ng l???c cho m??nh su???t th???i gian qua gi??p
                            m??nh kh??ng b??? cu???c.
                        </p>
                        <div className="mt-[28px] max-lg:text-center max-sm:hidden mb-[40px]">
                            <Link to="/portfolio">
                                <Button
                                    Icon={ArrowForwardIcon}
                                    title={'portfolio'}
                                />
                            </Link>
                            <Link to="/about">
                                <Button
                                    className="ml-[40px]"
                                    Icon={ArrowForwardIcon}
                                    title={'about'}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Curtain />
        </>
    );
}

export default Home;
