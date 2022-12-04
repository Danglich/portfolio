import Button from '../components/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Curtain from '../components/Curtain';

function Home() {
    return (
        <>
            <div className="h-[100vh] w-[100vw] bg-[#111]  overflow-hidden relative max-lg:overflow-auto max-lg:h-[auto]">
                <div className="h-[1400px] absolute bg-[#ffb400] w-[600px] rotate-[-15deg] translate-x-[-250px] max-lg:translate-x-[-320px] max-lg:hidden"></div>

                <div className="animate-[fadeUp_0.7s_linear] flex relative z-[2] items-center h-[100%] max-lg:flex-col max-lg:justify-center ">
                    <div className="flex-[1] px-[60px] max-sm:px-[0] shrink-0 max-lg:pt-[80px] max-lg:pb-[30px]">
                        <img
                            src="https://symbols.vn/wp-content/uploads/2022/01/Hinh-Anime-Naruto-cute-de-thuong-nhat.png"
                            alt=""
                            className="w-full rounded-[20px]  max-lg:rounded-full max-lg:h-[270px] max-lg:w-[270px]"
                        />
                    </div>
                    <div className="flex-[2] pl-[60px] pr-[160px] max-lg:px-[96px] max-sm:px-[14px]">
                        <div className="flex items-center ">
                            <span className="h-[4px] w-[40px] bg-[#ffb400] rounded-[2px]  max-lg:hidden"></span>
                            <h1 className="text-[#ffb400] font-[700] text-[46px] ml-[34px] tracking-[2px]  max-lg:text-[36px] max-xl:text-center max-xl:w-full">
                                I'm Dang Lich
                            </h1>
                        </div>
                        <h1 className="text-white font-[700] text-[46px] ml-[76px] mb-[20px] tracking-[2px]   max-lg:text-[36px] max-xl:mx-[0] max-xl:text-center  ">
                            Web Developer !
                        </h1>
                        <p className="dark:text-white leading-[34px] tracking-[0.5px] max-sm:pb-[16px] max-lg:text-center">
                            Hello mọi người! Mình là Lịch, đang là sinh viên năm
                            3 trường Đại học Bách Khoa Hà Nội chuyên ngành Điều
                            khiển - Tự động hóa. Cơ duyên mình đến với IT là nhờ
                            các sự tích "IT là vua của các nghề", hay câu chuyện
                            "thằng em học BK cơ khí sinh năm 96". Tháng 5/2021,
                            tình cờ biết đến cộng đồng F8 Fullstack của anh Sơn,
                            mình đã hoàn thành các khóa học HTML, CSS, ReactJS
                            và có được một số dự án cá nhân. Trải qua nhiều cay
                            đắng, thật sự cảm ơn anh Sơn cũng như cộng đồng anh
                            em đóng góp đã truyền động lực cho mình suốt thời
                            gian qua giúp mình không bỏ cuộc.
                        </p>
                        <div className="mt-[28px] max-lg:text-center max-sm:hidden mb-[40px]">
                            <Button
                                Icon={ArrowForwardIcon}
                                title={'portfolio'}
                            />
                            <Button
                                className="ml-[40px]"
                                Icon={ArrowForwardIcon}
                                title={'about'}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Curtain />
        </>
    );
}

export default Home;
