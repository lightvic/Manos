import { Swiper, SwiperSlide } from "swiper/react"
import Category from "./Category"
import { Box, Flex, Heading } from "@chakra-ui/react"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"
const CategoriesSwiper = ({ title, categories = [], images = [] }) => {
  const theme = useTheme()
  const isMatches = useMediaQuery(theme.breakpoints.up("lg"))
  return (
    <Flex flexDirection="column" gap={3}>
      <Heading size="sm">{title}</Heading>
      <Box maxW="100%">
        <Swiper spaceBetween={12} slidesPerView={isMatches ? 3 : 2}>
          {categories.map((category, i) => {
            return (
              <SwiperSlide key={i}>
                <Category name={category} image={images[i]} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Box>
    </Flex>
  )
}

export default CategoriesSwiper
