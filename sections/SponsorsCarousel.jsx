import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Carousel lives in main column (~2/3 width on md+). Items tuned for container width.
const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  smallTablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const SponsorCard = ({ sponsor }) => {
  const logoUrl = sponsor.logoUrl || sponsor.logo?.url;
  const content = (
    <div className="w-full h-28 flex items-center justify-center rounded-lg bg-white shadow-xl border border-gray-100 overflow-hidden p-4">
      <img
        src={logoUrl}
        alt={sponsor.name || "Sponsor"}
        loading="lazy"
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );

  if (sponsor.url) {
    return (
      <a
        href={sponsor.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        {content}
      </a>
    );
  }

  return content;
};

const SponsorsCarousel = ({ sponsors: sponsorsProp = [] }) => {
  const sponsorsWithLogo = (sponsorsProp || []).filter(
    s => s && (s.logoUrl || s.logo?.url),
  );

  if (sponsorsWithLogo.length === 0) return null;

  const ArrowFix = arrowProps => {
    const { carouselState, children, ...restArrowProps } = arrowProps;
    return <span {...restArrowProps}> {children} </span>;
  };

  const customLeftArrow = (
    <ArrowFix>
      <div className="absolute left-0 cursor-pointer z-10">
        <BsFillArrowLeftCircleFill size={40} color="white" />
      </div>
    </ArrowFix>
  );

  const customRightArrow = (
    <ArrowFix>
      <div className="absolute right-0 cursor-pointer z-10">
        <BsFillArrowRightCircleFill size={40} color="white" />
      </div>
    </ArrowFix>
  );

  if (sponsorsWithLogo.length === 1) {
    return (
      <div className="mb-20">
        <h2 className="text-2xl font-semibold text-gray-700 mb-8 text-center">
          Notre Sponsor
        </h2>
        <div className="max-w-md mx-auto">
          <SponsorCard sponsor={sponsorsWithLogo[0]} />
        </div>
      </div>
    );
  }

  return (
    <div className="mb-20">
      <h2 className="text-2xl font-semibold text-gray-700 mb-8 text-center">
        Nos Sponsors
      </h2>
      <Carousel
        ssr={false}
        infinite
        customLeftArrow={customLeftArrow}
        customRightArrow={customRightArrow}
        responsive={responsive}
        itemClass="px-4 flex items-center justify-center"
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        transitionDuration={500}
        containerClass="sponsors-carousel-container"
      >
        {sponsorsWithLogo.map((sponsor, index) => (
          <SponsorCard key={index} sponsor={sponsor} />
        ))}
      </Carousel>
    </div>
  );
};

export default SponsorsCarousel;
