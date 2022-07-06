import {
  Input,
  Box,
  Flex,
  Image,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react"
import React, { useState } from "react"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"

const SearchLayout = ({ children }) => {
  const [search, setSearch] = useState("")
  const [slideValue, setSlideValue] = useState(10)
  const theme = useTheme()
  const isMatches = useMediaQuery(theme.breakpoints.up("lg"))
  return (
    <Box px={isMatches ? 0 : 4}>
      <Input
        placeholder="Que recherchez-vous ?"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Flex gap={3} mt={3}>
        <Popover placement="bottom-start">
          <PopoverTrigger>
            <Button border="1px solid #E2E8F0" bgColor="#ffff" color="#94A3B8">
              Localisation
            </Button>
          </PopoverTrigger>
          <PopoverContent width="343px" height="126px">
            <Flex justify-content="align" margin="10px" mt="15">
              <Image
                src="/icons/localisation.png"
                alt="Logo"
                width="22px"
                height="32px"
              />
              <Input
                ml="12px"
                placeholder="Votre localisation"
                width="234px"
                height="32px"
              />
            </Flex>
            <Flex
              justify="space-between"
              ml="10px"
              mr="20px"
              mt="10px"
              fontSize="12px"
              fontWeight="bold"
            >
              <span color="#94A3B8">{slideValue}km</span>
            </Flex>

            <Slider
              ml="10px"
              mr="20px"
              aria-label="slider-ex-1"
              min={0}
              max={50}
              defaultValue={10}
              width="311px"
              height="16px"
              onChange={(e) => setSlideValue(e)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <PopoverArrow />
            <PopoverCloseButton />
          </PopoverContent>{" "}
        </Popover>

        <Popover>
          <PopoverTrigger>
            <Button border="1px solid #E2E8F0" bgColor="#ffff" color="#94A3B8">
              Budget
            </Button>
          </PopoverTrigger>
          <PopoverContent width="344px" height="110px">
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <p>Veuillez indiquer votre budget :</p>
            </PopoverBody>
            <Flex ml="10px" mr="16px" mt="10px" justifyContent="space-between">
              <Input placeholder="Min €" />
              <Input placeholder="Max €" ml="12px" />
            </Flex>
          </PopoverContent>
        </Popover>
      </Flex>
      {React.cloneElement(children, { search })}
    </Box>
  )
}

export default SearchLayout
