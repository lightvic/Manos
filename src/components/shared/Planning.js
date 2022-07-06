import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Text, Box } from "@chakra-ui/react"
// Import Swiper styles

import "swiper/css/navigation"

// import required modules
import { Navigation } from "swiper"
import PlanningCard from "./PlanningCard"
const Planning = () => {
  return (
    <Box>
      <Text
        fontSize={["0.875em", "0.875em", "1.5em"]}
        mb="0.75em"
        mt="1.25em"
        fontWeight="bold"
      >
        Planning 2022
      </Text>

      <>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="planning_arrows"
        >
          <SwiperSlide>
            <PlanningCard month="Janvier" week1={true} week3={true} />
          </SwiperSlide>
          <SwiperSlide>
            <PlanningCard month="Février" week2={true} week1={true} />
          </SwiperSlide>
          <SwiperSlide>
            <PlanningCard month="Mars" week4={true} week3={true} />
          </SwiperSlide>
          <SwiperSlide>
            <PlanningCard month="Avril" week1={true} week4={true} />
          </SwiperSlide>
          <SwiperSlide>
            <PlanningCard month="Mai" />
          </SwiperSlide>
          <SwiperSlide>
            <PlanningCard month="Juin" week1={true} week3={true} />
          </SwiperSlide>
          <SwiperSlide>
            <PlanningCard month="Juillet" week1={true} week2={true} />
          </SwiperSlide>
          <SwiperSlide>
            <PlanningCard month="Aout" week2={true} week3={true} />
          </SwiperSlide>
          <SwiperSlide>
            <PlanningCard month="Septembre" week4={true} week1={true} />
          </SwiperSlide>
          <SwiperSlide>
            <PlanningCard month="Octobre" week2={true} week4={true} />
          </SwiperSlide>
          <SwiperSlide>
            <PlanningCard month="Novembre" />
          </SwiperSlide>
          <SwiperSlide>
            <PlanningCard month="Décembre" />
          </SwiperSlide>
        </Swiper>
      </>
    </Box>
  )
}

export default Planning
