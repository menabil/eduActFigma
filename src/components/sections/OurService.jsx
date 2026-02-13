
import Commonh4 from "../Commonh4";
import Container from "../Container";
import Flex from "../Flex";
import Commonh3 from "../Commonh3";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import ServiceCard from "../../components/ServiceCard";
import serviceEducation from "../../assets/serviceEducation.png";
import serviceBusiness from "../../assets/serviceBusiness .png";
import serviceWebinar from "../../assets/serviceWebinar.png";
import serviceNeural from "../../assets/serviceNeural.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState } from "react"

const OurService = () => {
  const [swiperRef, setSwiperRef] = useState("");

  return (
    <>
      <section className="OurService">
        <div className="mt-[119px] mb-[98px]">
          <div className="bg-[url('/src/assets/serviceBg.png')] py-[120px] bg-cover bg-no-repeat bg-center">
            <Container>
              {/* Service Header Start */}

              <header>
                <Flex
                  className={"items-center gap-[15px] justify-center pb-[30px]"}
                >
                  <Commonh4
                    commonh4={"Our Service"}
                    className={"text-primarys leading-[26px]"}
                  />
                  <div className="flex items-center gap-x-[5px]">
                    <svg
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.84 5.68L0 11.36V7.75L3.59 5.68L0 3.61V0L9.84 5.68Z"
                        fill="#F57005"
                      />
                    </svg>
                    <svg
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.84 5.68L0 11.36V7.75L3.59 5.68L0 3.61V0L9.84 5.68Z"
                        fill="#F57005"
                      />
                    </svg>
                    <svg
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.84 5.68L0 11.36V7.75L3.59 5.68L0 3.61V0L9.84 5.68Z"
                        fill="#F57005"
                      />
                    </svg>
                    <svg
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.84 5.68L0 11.36V7.75L3.59 5.68L0 3.61V0L9.84 5.68Z"
                        fill="#F57005"
                      />
                    </svg>
                  </div>
                </Flex>
                <Commonh3
                  commonh3={"Creating a Lifelong Learning Best Community "}
                  className={
                    "font-Urbanist text-primaryTwo leading-[47px] w-[592px] mx-auto text-center"
                  }
                />
              </header>
              {/* Service Header End */}

              {/* Arrow Start */}
              <Flex className={"gap-3.5 justify-end pb-[43px]"}>
                <div className="h-10 w-10 bg-white rounded-sm flex justify-center items-center group hover:bg-primarys transition-all cursor-pointer duration-300  ">
                  <FaArrowLeftLong className="text-primarys group-hover:text-white" />
                </div>
                <div className="h-10 w-10 bg-white rounded-sm flex justify-center items-center group hover:bg-primarys transition-all cursor-pointer duration-300">
                  <FaArrowRightLong className="text-primarys group-hover:text-white" />
                </div>
              </Flex>
              {/* Arrow End */}

              {/* Service Card Start */}

              <Flex className={"gap-9"}>
                <Swiper
                  onSwiper={setSwiperRef}
                  modules={[Navigation,Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={4}
                  loop={true}
                >
                  <SwiperSlide>
                    <ServiceCard
                      serviceCardImage={serviceEducation}
                      cardHeading={"Exclusive Coach"}
                      cardContent={
                        "Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit "
                      }
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ServiceCard
                      serviceCardImage={serviceBusiness}
                      cardHeading={"Creative Minds"}
                      cardContent={
                        "Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit "
                      }
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ServiceCard
                      serviceCardImage={serviceWebinar}
                      cardHeading={"Video Tutorials"}
                      cardContent={
                        "Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit "
                      }
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ServiceCard
                      serviceCardImage={serviceNeural}
                      cardHeading={"Worlds Record"}
                      cardContent={
                        "Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit "
                      }
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ServiceCard
                      serviceCardImage={serviceEducation}
                      cardHeading={"Exclusive Coach"}
                      cardContent={
                        "Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit "
                      }
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ServiceCard
                      serviceCardImage={serviceBusiness}
                      cardHeading={"Creative Minds"}
                      cardContent={
                        "Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit "
                      }
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ServiceCard
                      serviceCardImage={serviceWebinar}
                      cardHeading={"Video Tutorials"}
                      cardContent={
                        "Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit "
                      }
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ServiceCard
                      serviceCardImage={serviceNeural}
                      cardHeading={"Worlds Record"}
                      cardContent={
                        "Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit "
                      }
                    />
                  </SwiperSlide>
                </Swiper>
              </Flex>
              {/* Service Card End */}
            </Container>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurService;
