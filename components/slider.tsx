// Import Swiper React components
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import Stap1 from './zakelijk-berekening/stap1';
import Stap2 from './zakelijk-berekening/stap2'
import Stap3 from './zakelijk-berekening/stap3'
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
  return (

    <>
    
    <div className="flex box-content bg-black h-4 w-4 p-4 rounded-md items-center justify-self-center mt-8"><p className="text-white mx-auto font-bold"></p>
        </div>
        <div><h1 className='text-center'>Bedrijfs gegevens</h1></div>
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
        console.log((index.activeIndex + 1)* 20);
      }}
    >
      <SwiperSlide><Stap1 /></SwiperSlide>
      <SwiperSlide><Stap2 /></SwiperSlide>
      <SwiperSlide><Stap3 /></SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
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