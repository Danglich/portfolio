import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';

function SlideImage({ project }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="h-[430px] mt-[20px]">
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={8}
                navigation={true}
                thumbs={{
                    swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                            ? thumbsSwiper
                            : null,
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
                slidesPerView={1}
                loop
            >
                {project.images.map((img) => (
                    <SwiperSlide>
                        <img src={img} alt="" key={img} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={8}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
                loop
            >
                {project.images.map((img) => (
                    <SwiperSlide>
                        <img src={img} alt="" key={img} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SlideImage;
