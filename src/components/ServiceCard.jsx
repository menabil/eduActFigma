import React from "react";
import Images from "./Images";
import serviceCardBg from "../../src/assets/servicecardbg.png";
import serviceCardRound from "../../src/assets/servicecardround.png";
import education from "../../src/assets/serviceEducation.png";
import Container from "./Container";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ServiceCard = () => {
  return (
    <>
      <Container>
        <div className="bg-white max-w-[303px] relative shadow-newMade rounded-[10px] overflow-hidden group">
          <Images className={"relative"} imgSrc={serviceCardBg} />
          {/* <Images
            className={"absolute top-0 left-1/2 -translate-x-1/2 group-hover:"}
            imgSrc={serviceCardRound}
          /> */}
          <div className="absolute -top-[60px] left-1/2 -translate-x-1/2 w-[166px] h-[166px] bg-secondary rounded-full group-hover:bg-primary transition-colors duration-300"></div>
          <Images
            className={"absolute top-[15px] left-1/2 -translate-x-1/2"}
            imgSrc={education}
          />
          <div className="pt-[23px] text-center max-w-[215px] mx-auto ">
            <h5 className="font-Urbanist font-bold text-[20px] text-primaryTwo pb-[30px]">
              Exclusive Coach
            </h5>
            <p className="font-Urbanist font-medium text-base text-[#697585] leading-[25px]">
              Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id
              hendrerit{" "}
            </p>
          </div>
          <div className="w-full border-b border-[#E4E4E4] mt-10"></div>
          <div className="py-[30px] flex items-center gap-x-[9px] justify-center group-hover:bg-[#152B4A] transition-colors duration-300 ">
            <p className="font-Urbanist font-bold text-base text-primaryTwo group-hover:text-white ">
              Read More
            </p>
            <MdOutlineKeyboardArrowRight className="text-[#F57005] text-[20px]" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ServiceCard;
