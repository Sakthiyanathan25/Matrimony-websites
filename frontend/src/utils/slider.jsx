import React from 'react';
import Slider from 'react-slick';

// Image and Text Slider Component
export const ImageAndTextSlider = ({ ImageAndText }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  
  return (
    <div className="w-[100%]">
      <Slider {...settings}>
        {ImageAndText.map((each) => (
          <div key={each.id} className="">
           <div className='flex justify-center gap-2 items-center font-jost '>
           <div className='w-[40%] py-[10px] flex justify-center'>
            <img
              src={each.img}
              alt={`Slide ${each.id}`}
              className="md:h-[350px] h-[250px] p-[10px] mt-3 border-2"
            />
            </div>
            <div className='w-[60%] h-[280px] px-[10px] pt-5  text-center text-xl md:text-2xl overflow-hidden'>
  <h1 className='text-white '>
    {each.Mr_name} <span>&</span> {each.Mrs_name}
  </h1>
  <p className='line-clamp-[8]'>
    {each.review}
  </p>
</div>


           </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Image Slider Component
export const ImageSlider = ({ Image }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {Image.map((each) => (
          <div key={each.id} >
            <div className="flex flex-col justify-center gap-4 items-center w-full h-full p-4">
            <h1 className='text-white font-jost md:text-2xl text-xl '>{each.Mr_name} <span>&</span> {each.Mrs_name}</h1>

<img
  src={each.img}
  alt={`Slide ${each.id}`}
  className="object-cover max-h-[230px] md:max-h-[300px] border-2 md:p-5 p-2"
/>
            </div>
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Text Slider Component
export const TextSlider = ({ Text }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {Text.map((each) => (
          <div key={each.id} >
            <div className="flex flex-col justify-center h-full mt-4 items-center gap-2 p-4">
            <h1 className='text-white font-jost md:text-2xl text-xl '>{each.Mr_name} <span>&</span> {each.Mrs_name}</h1>
            <p  className='text-black text-center font-jost md:text-2xl text-xl '>{each.review}</p>
            </div>
            
          </div>
        ))}
      </Slider>
    </div>
  );
};
