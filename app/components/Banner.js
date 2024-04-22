"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative max-w-screen-xl mx-auto">
      <div className="absolute h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-40" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            className="h-96"
            loading="lazy"
            src="https://static.vecteezy.com/system/resources/thumbnails/004/299/815/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            className="h-96"
            loading="lazy"
            src="https://static.vecteezy.com/system/resources/thumbnails/002/006/774/small/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            className="h-96"
            loading="lazy"
            src="https://static.vecteezy.com/system/resources/thumbnails/002/006/605/small/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-free-vector.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
