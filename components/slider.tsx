// Import Swiper React components
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import Stap1 from './particuliere-berekening/stap1'
import Stap2 from './particuliere-berekening/stap2'
import Stap3 from './particuliere-berekening/stap3'
import Stap4 from './particuliere-berekening/stap4'
import Stap5 from './particuliere-berekening/stap5'
import { Progress } from './ui/progress';
import { ArrowRight } from 'lucide-react';
import { ArrowLeft  } from 'lucide-react'

// Import Swiper styles
import 'swiper/css';
import { useState } from 'react';
import { Button } from './ui/button';

export default () => {

    var [currentprogressvalue, setProgressValue] = useState(20);
    const [my_swiper, setMySwiper] = useState<SwiperClass>();
    var [currentindexvalue, setCurrentIndexValue] = useState(1);
  return (

    <>
    
    <div className="flex box-content bg-black h-4 w-4 p-4 rounded-md items-center justify-self-center mt-8"><p className="text-white mx-auto font-bold">{currentindexvalue}</p>
        </div>
        <div className="flex justify-center">
        <Progress value={currentprogressvalue} className="max-w-[450px] justify-center"/>
        </div>


    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      simulateTouch={false}
      onInit={(swiper) => setMySwiper(swiper)}
      onSlideChange={index => {
        console.log();
        setProgressValue((index.activeIndex + 1)* 20);
        setCurrentIndexValue((index.activeIndex +1));
        console.log((index.activeIndex ));
      }}
    >
      <SwiperSlide><Stap1 /></SwiperSlide>
      <SwiperSlide><Stap2 /></SwiperSlide>
      <SwiperSlide><Stap3 /></SwiperSlide>
      <SwiperSlide><Stap4 /></SwiperSlide>
      <SwiperSlide><Stap5 /></SwiperSlide>
    </Swiper>
    <div className="flex mt-16 justify-center gap-56">
  <Button className="max-w-[50px]" onClick={() => my_swiper!.slidePrev()}>
    <ArrowLeft />
  </Button>
  <Button className="max-w-[50px]" onClick={() => my_swiper!.slideNext()}>
    <ArrowRight />
  </Button>
</div>

    </>
  );
};