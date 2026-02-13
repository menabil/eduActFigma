import Container from "@/components/Container";
import Flex from "@/components/Flex";
import { FaAngleRight } from "react-icons/fa";
import { FiPhoneCall, FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <>
      {/* Header part */}
      <div className="lg:pt-[174px] lg:pb-[154px] py-25 bg-black text-center text-white">
        <Container>
          <h3 className="font-bold text-[50px]">FAQs</h3>
          <p className="text-xl pt-4">Home / FAQs</p>
        </Container>
      </div>
      <Container>
        <Flex
          className={
            "gap-x-2 lg:text-2xl text-lg text-primarys font-bold justify-center mt-30"
          }
        >
          Our Recent FAQS
          <Flex className="lg:text-base text-sm text-secondarys">
            <FaAngleRight />
            <FaAngleRight />
            <FaAngleRight />
            <FaAngleRight />
          </Flex>
        </Flex>
        <h3 className="text-primaryTwo lg:text-[40px] text-3xl font-bold lg:mt-5 mt-3 lg:mb-20 mb-15 text-center lg:w-[514px] mx-auto">
          Frequently asked Question & Answers Here
        </h3>
        
        {/* Faq part */}
        <Accordion
          type="single"
          collapsible
          className="max-w-[1100px] mx-auto"
        >
          <div className="flex flex-col gap-y-5">
            {/* ITEM 1 */}
            <AccordionItem
              value="item-1"
              className="border-[#E4E4E4] border-2 rounded-xl py-9 px-10 w-[1100px] last:border-b-2"
            >
              <AccordionTrigger
                className="hover:no-underline hover:cursor-pointer text-primaryTwo text-base font-semibold data-[state=open]:text-secondarys group [&>svg]:hidden flex justify-between items-center"
              >
                <span>What Happens to my data if I cancel?</span>
                {/* Custom Icon Logic */}
                <span className="text-xl">
                  <FiPlus className="block group-data-[state=open]:hidden text-primaryTwo" />
                  <FaMinus className="hidden group-data-[state=open]:block" />
                </span>
              </AccordionTrigger>
              <AccordionContent className="mt-10 text-base text-[#697585] font-semibold w-[945px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </AccordionContent>
            </AccordionItem>

            {/* ITEM 2 */}
            <AccordionItem
              value="item-2"
              className="border-[#E4E4E4] border-2 rounded-xl py-9 px-10 w-[1100px] last:border-b-2"
            >
              <AccordionTrigger
                className="hover:no-underline hover:cursor-pointer text-primaryTwo text-base font-semibold data-[state=open]:text-secondarys group [&>svg]:hidden flex justify-between items-center"
              >
                <span>What Happens to my data if I cancel?</span>
                <span className="text-xl">
                  <FiPlus className="block group-data-[state=open]:hidden text-primaryTwo" />
                  <FaMinus className="hidden group-data-[state=open]:block" />
                </span>
              </AccordionTrigger>
              <AccordionContent className="mt-10 text-base text-[#697585] font-semibold w-[945px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </AccordionContent>
            </AccordionItem>

            {/* ITEM 3 */}
            <AccordionItem
              value="item-3"
              className="border-[#E4E4E4] border-2 rounded-xl py-9 px-10 w-[1100px] last:border-b-2"
            >
              <AccordionTrigger
                className="hover:no-underline hover:cursor-pointer text-primaryTwo text-base font-semibold data-[state=open]:text-secondarys group [&>svg]:hidden flex justify-between items-center"
              >
                <span>What Happens to my data if I cancel?</span>
                <span className="text-xl">
                  <FiPlus className="block group-data-[state=open]:hidden text-primaryTwo" />
                  <FaMinus className="hidden group-data-[state=open]:block" />
                </span>
              </AccordionTrigger>
              <AccordionContent className="mt-10 text-base text-[#697585] font-semibold w-[945px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </AccordionContent>
            </AccordionItem>

            {/* ITEM 4 */}
            <AccordionItem
              value="item-4"
              className="border-[#E4E4E4] border-2 rounded-xl py-9 px-10 w-[1100px] last:border-b-2"
            >
              <AccordionTrigger
                className="hover:no-underline hover:cursor-pointer text-primaryTwo text-base font-semibold data-[state=open]:text-secondarys group [&>svg]:hidden flex justify-between items-center"
              >
                <span>What Happens to my data if I cancel?</span>
                <span className="text-xl">
                  <FiPlus className="block group-data-[state=open]:hidden text-primaryTwo" />
                  <FaMinus className="hidden group-data-[state=open]:block" />
                </span>
              </AccordionTrigger>
              <AccordionContent className="mt-10 text-base text-[#697585] font-semibold w-[945px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </AccordionContent>
            </AccordionItem>

            {/* ITEM 5 */}
            <AccordionItem
              value="item-5"
              className="border-[#E4E4E4] border-2 rounded-xl py-9 px-10 w-[1100px] last:border-b-2"
            >
              <AccordionTrigger
                className="hover:no-underline hover:cursor-pointer text-primaryTwo text-base font-semibold data-[state=open]:text-secondarys group [&>svg]:hidden flex justify-between items-center"
              >
                <span>What Happens to my data if I cancel?</span>
                <span className="text-xl">
                  <FiPlus className="block group-data-[state=open]:hidden text-primaryTwo" />
                  <FaMinus className="hidden group-data-[state=open]:block" />
                </span>
              </AccordionTrigger>
              <AccordionContent className="mt-10 text-base text-[#697585] font-semibold w-[945px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </AccordionContent>
            </AccordionItem>
          </div>
        </Accordion>
        {/* Faq part */}
        
        {/* Call part */}
        <div className="w-[1100px] mx-auto bg-[#4353c5] rounded-[14px] px-[285px] py-[52px] my-30 text-center cursor-pointer">
          <div className="text-secondarys bg-white text-[28px] p-4.5 w-[67px] h-[65px] rounded-full mx-auto flex items-center justify-center">
            <FiPhoneCall />
          </div>
          <h4 className="text-white text-[40px] font-semibold border-b-2 border-secondarys mt-5 pb-3">
            Do you still have question?
          </h4>
          <p className="text-white text-base font-semibold mt-5 mb-2">
            Call Anytime
          </p>
          <h6 className="text-white text-2xl font-bold">(303) 555-0105</h6>
        </div>
        {/* Call part */}
      </Container>
    </>
  );
};

export default Faq;