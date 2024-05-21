// Import Swiper React components
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import Stap1 from './particuliere-berekening/stap1'
import Stap2 from './particuliere-berekening/stap2'
import Stap3 from './particuliere-berekening/stap3'
import Stap4 from './particuliere-berekening/stap4'
import { Progress } from './ui/progress';
import { ArrowRight } from 'lucide-react';
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import { useActionState, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { FinalForm, Stap1Form, Stap2Form, Stap3Form, Stap4Form, Stap1Validator, Stap2Validator } from '@/lib/definitions';
import { ZodError, ZodIssue } from 'zod';

export default () => {

  var [currentprogressvalue, setProgressValue] = useState(25);
  const [my_swiper, setMySwiper] = useState<SwiperClass>();
  var [currentindexvalue, setCurrentIndexValue] = useState(1);
  
  

  useEffect(() => {

  }, [currentindexvalue]);


  const getButtonValue = () => {
    if (currentindexvalue == 4) {
      return <Link href="dashboard/resultaat">Ga naar uw resulaten</Link>;
    } else {
      return <ArrowRight />;
    }
  }
  return (

    <>

      <div className="flex box-content bg-black h-4 w-4 p-4 rounded-md items-center justify-self-center mt-8"><p className="text-white mx-auto font-bold">{currentindexvalue}</p>
      </div>
      <div className="flex justify-center">
        <Progress value={currentprogressvalue} className="max-w-[450px] justify-center" />
      </div>


      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        simulateTouch={false}
        onInit={(swiper) => setMySwiper(swiper)}
        onSlideChange={index => {
          setProgressValue((index.activeIndex + 1) * 25);
          setCurrentIndexValue((index.activeIndex + 1));
        }}
      >
        <SwiperSlide><Stap1  /></SwiperSlide>
        <SwiperSlide><Stap2 /></SwiperSlide>
        <SwiperSlide><Stap3 /></SwiperSlide>
        <SwiperSlide><Stap4 /></SwiperSlide>
      </Swiper>
      {/* {
        errors && errors.map((error, index) => (
          <h1 key={index} className='text-red'>{error.message}</h1>
        ))
      } */}
      <div className="flex mt-16 justify-center gap-56">
        <Button disabled={currentindexvalue == 1} className="" onClick={() => my_swiper!.slidePrev()}>
          <ArrowLeft />
        </Button>
        <Button className="" onClick={() => my_swiper!.slideNext()}>
          {getButtonValue()}
        </Button>
      </div>

    </>
  );
};