import React, { useState, useEffect } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeaturedPostCard from "../components/FeaturedPostCard";
import { getFeaturedPosts } from "../services";

const responsive = {
  extraLargeDesktop: {
    breakpoint: { max: 4000, min: 1536 },
    items: 5,
  },
  largeDesktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then(result => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  const customLeftArrow = (
    <div className="absolute left-0 cursor-pointer">
      <BsFillArrowLeftCircleFill size={40} color="white" />
    </div>
  );

  const customRightArrow = (
    <div className="absolute right-0 cursor-pointer">
      <BsFillArrowRightCircleFill size={40} color="white" />
    </div>
  );

  return (
    <div className="mb-10">
      <Carousel
        infinite
        customLeftArrow={customLeftArrow}
        customRightArrow={customRightArrow}
        responsive={responsive}
        itemClass="px-4"
      >
        {dataLoaded &&
          featuredPosts.map((post, index) => (
            <FeaturedPostCard key={index} post={post} />
          ))}
      </Carousel>
    </div>
  );
};

export default FeaturedPosts;
