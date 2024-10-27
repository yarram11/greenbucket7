import Link from 'next/link'; // Ensure you have this import for Link
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination'; // Import pagination styles

export const BannerSlider = () => {
  // Updated SlideContent to accept custom title, subtitle, and styles
  const SlideContent = ({ backgroundImage, title, subtitle, textLine1, textLine2 }) => (
    <div
      className="item w-full relative flex flex-col"
      style={{ background: `url(${backgroundImage}) center/cover`, height: '100vh' }}
    >
      <div className="info flex flex-col items-start justify-center pl-10 pr-10 h-full">
        {/* Title and Subtitle */}
        <div
          style={{
            position: 'absolute',
            top: '35%',
            left: '10%',
            transform: 'translateY(-50%)',
            color: 'orange',
            fontFamily: 'Playfair Display, serif',
          }}
        >
          <h3
            style={{
              fontSize: '2rem',
              marginBottom: '0.5rem',
              textAlign: 'left',
              color: 'orange', // Title color
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: '1.5rem',
              textAlign: 'left',
              color: 'white', // Subtitle color
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Main Text */}
        <h2
          className="banner-title mb-4"
          style={{
            fontFamily: 'Playfair Display, serif',
            lineHeight: '1',
            fontSize: '3rem',
            marginBottom: '1rem',
            marginTop: '0',
            textAlign: 'left',
            color: 'white',
            position: 'absolute',
            top: '50%',
            left: '10%',
            transform: 'translateY(-50%)',
          }}
        >
          <span>{textLine1}</span><br /> {/* Line break for rendering */}
          <span>{textLine2}</span>
        </h2>

        <div className="flex space-x-4 mb-4" style={{ position: 'absolute', left: '10%', top: '60%' }}>
          <Link
            href="#reserve-table"
            className="link-button"
            style={{
              backgroundColor: 'transparent',
              border: '2px solid green',
              color: 'white',
              padding: '10px 20px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'green';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'white';
            }}
          >
            Book a Table
          </Link>
          <Link
            href="/know-more"
            className="link-button"
            style={{
              backgroundColor: 'transparent',
              border: '2px solid green',
              color: 'white',
              padding: '10px 20px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'green';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'white';
            }}
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="banner-slider-container w-full h-screen">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="banner-slider w-full h-full"
      >
        {/* Custom slides with title, subtitle, and text split into two lines */}
        {[
          {
            image: "/slide1.png",
            title: "Excellence in every bite",
            subtitle: "Quality in every ingredient",
            textLine1: "Where quality meets precision",
            textLine2: "A taste of happiness"  // Second line of text
          },
          {
            image: "/slide2.png",
            title: "Delightful flavors",
            subtitle: "For every occasion",
            textLine1: "A taste of happiness",
            textLine2: "in every bite"  // Second line of text
          },
          {
            image: "/slide3.png",
            title: "Experience the aroma",
            subtitle: "Of exquisite cuisine",
            textLine1: "Choosing the best quality",
            textLine2: "for you"  // Second line of text
          },

        ].map((slide, index) => (
          <SwiperSlide key={index}>
            <SlideContent
              backgroundImage={slide.image}
              title={slide.title}
              subtitle={slide.subtitle}
              textLine1={slide.textLine1}
              textLine2={slide.textLine2}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
