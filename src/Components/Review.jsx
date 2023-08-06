import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Review() {
  return (
    <div className="h-full">
      <Swiper
        style={{
          '--swiper-navigation-color': '#ffffff',
          '--swiper-pagination-color': '#ffffff',
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper md:h-80 h-128 bg-[#c94b60]"
      >
        <SwiperSlide className="text-center text-xl bg-[#c94b60] flex justify-center items-center flex-col ">
          <h1 className='text-2xl text-white font-montserrat'>Birthday Party</h1>
          <p className=' text-base w-3/4 text-white font-raleway'>"This was one of the most classy and elegant looking photobooths360. I used it for a huge birthday event and honestly it was so fun! Would highly recommend Smilebooth360 and their team. They are truly professional and gave me exactly what I was looking for! I still have people telling me how fun the event was. THANKYOU SMILEBOOTH360 for making me feel special."</p>
        </SwiperSlide>
        <SwiperSlide className=" text-center text-xl bg-[#c94b60] flex justify-center items-center flex-col">
          <h1 className="text-2xl text-white font-montserrat">House Party</h1>
          <p className="text-base w-3/4 text-white font-raleway">Melody Hossaini, former BBC The Apprentice star says “SmileBooth's 360 Video Booth is an absolute game-changer! AsI'm no stranger to innovation, and this booth exceeded all expectations. The cutting-edge technology flawlessly captured immersive content from every angle, adding a unique and exciting touch to my videos. The user-friendly interface and dedicated team made the entire experience a breeze. SmileBooth's 360 Video Booth is a must-try for anyone aiming to captivate their audience in a fresh and unforgettable way. Warmly,
Melody Hossaini
</p>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl bg-[#c94b60] flex justify-center items-center flex-col">
          <h1 className="text-2xl w-1/3 text-white font-montserrat">Fundraising Event</h1>
          <p className="text-base w-3/4 text-white font-raleway ">“The best addition to our fundraising gala. We would really recommend these guys, me and my team absolutely loved the classy/elegant lay out of the smilebooth360 and we really felt like VIPS walking down that red carpet and amazing gold posts! Perfect for any corporate event and worth every penny. Thanks again” </p>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default Review;