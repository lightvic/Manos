import React, { useEffect } from "react";
import axios from "axios";
import { Box, Flex, Heading, Button, Text } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import DefaultLayout from "../../layouts/DefaultLayout";
import CategoriesSwiper from "../../components/shared/CategoriesSwiper";
import BackArrow from "../../components/shared/BackArrow";
import Category from "../../components/shared/Category";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

const SlideImage = ({ src }) => {
  const theme = useTheme();
  const isMatches = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box position="relative" h={isMatches ? 400 : 215}>
      <Image src={src} layout="fill" alt="Photo de projet" objectFit="cover" />
    </Box>
  );
};

const ProjectPage = ({ project }) => {
  const theme = useTheme();
  const isMatches = useMediaQuery(theme.breakpoints.up("lg"));
  const [activeSlide, setActiveSlide] = useState(1);
  const slideImageNumber = project.pictures_name.length;
  const [collaborateurs, SetCollaborateurs] = useState([]);
  const [otherProjects, setOtherProjects] = useState([]);
  const otherProjectsFiltered = otherProjects.filter(
    (item) => item.project_id !== project.project_id
  );
  const otherProjectsTitle = otherProjectsFiltered.map((project) => {
    return project.title;
  });
  const otherProjectsId = otherProjectsFiltered.map((project) => {
    return project.project_id.toString();
  });
  const OtherProjectImage = otherProjectsFiltered.map((project) => {
    return "https://api-manos.bdph.me/uploads/" + project.pictures_name[0];
  });

  useEffect(() => {
    axios
      .get(
        process.env.NEXT_PUBLIC_PHP_API_URL +
          "/collaborators.php?projectId=" +
          project.project_id
      )
      .then((res) => SetCollaborateurs(res.data));
    axios
      .get(
        process.env.NEXT_PUBLIC_PHP_API_URL +
          "/projects.php?userId=" +
          project.user_id
      )
      .then((res) => setOtherProjects(res.data));
  }, []);
  return (
    <Box maxW="4xl" mx="auto" overflow="hidden" position="relative">
      <Box
        position="absolute"
        zIndex={10}
        bgColor="whiteAlpha.600"
        fontSize={14}
        px={4}
        py={1}
        borderRadius="full"
        fontWeight={600}
        color="black"
        top={3}
        right={3}
      >
        {activeSlide}/{slideImageNumber}
      </Box>
      <Swiper
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex + 1)}
      >
        {project.pictures_name?.map((picture, i) => (
          <SwiperSlide key={i}>
            <SlideImage src={"https://api-manos.bdph.me/uploads/" + picture} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Flex
        flexDir="column"
        p={isMatches ? 0 : 4}
        mt={isMatches ? 4 : 0}
        mb={isMatches ? 4 : 0}
        gap={4}
        style={{ zoom: isMatches ? 1.2 : 1 }}
      >
        <Box>
          <Heading size="sm" mb={3}>
            {project.title}
          </Heading>
          <Text fontSize="sm" color="gray.500">
            {project.description}
          </Text>
        </Box>
        <Flex justifyContent="space-between">
          <Box>
            <Heading size="xs" mb={1}>
              Temps de réalisation
            </Heading>
            <Text fontSize="sm" color="gray.500">
              {project.timespan}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" mb={1}>
              Coût du projet
            </Heading>
            <Text fontSize="sm" color="gray.500">
              {project.budget.toLocaleString()} €
            </Text>
          </Box>
        </Flex>
        <Flex justifyContent="space-between">
          <Box>
            <Heading size="xs" mb={1}>
              Localisation
            </Heading>
            <Text fontSize="sm" color="gray.500">
              {project.localisation}
            </Text>
          </Box>
        </Flex>
        <Button colorScheme="teal" mt={1}>
          <EmailIcon mr={3} /> Envoyer un message
        </Button>
        <Box>
          <Heading size="sm" mb={2}>
            Collaborateurs
          </Heading>
          <Flex
            justify={{ base: "center", sm: "space-between" }}
            align="baseline"
            wrap="wrap"
            gap={5}
            className="profils"
          >
            {collaborateurs?.map((collaborateur, i) => (
              <Box key={i}>
                <Flex align="center" gap={1}>
                  <Box
                    w={10}
                    h={10}
                    borderRadius="full"
                    overflow="hidden"
                    position="relative"
                  >
                    <Image
                      src={
                        "https://api-manos.bdph.me/uploads/" +
                        collaborateur.profile_picture
                      }
                      layout="fill"
                      alt="Photo de profil"
                      objectFit="cover"
                    />
                  </Box>
                  <Heading size="xs" mb={1}>
                    {collaborateur.company}
                  </Heading>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Box>
        <Box>
          <Flex flexDirection="column" gap={3}>
            <Heading size="sm">Autres Projets</Heading>
            <Box maxW="100%">
              <Swiper spaceBetween={12} slidesPerView={isMatches ? 3 : 2}>
                {otherProjectsTitle.map((category, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <Box>
                        <Link href={"/project/" + otherProjectsId[i]}>
                          <Category
                            name={category}
                            image={OtherProjectImage[i]}
                          />
                        </Link>
                      </Box>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export const getServerSideProps = async ({ req, query }) => {
  const id = query.id;
  const res = await axios.get(
    process.env.NEXT_PUBLIC_PHP_API_URL + "/projects.php?projectId=" + id
  );
  const project = res.data;

  return {
    props: { project },
  };
};

ProjectPage.getLayout = (page) => {
  return (
    <DefaultLayout>
      <BackArrow />
      {page}
    </DefaultLayout>
  );
};

export default ProjectPage;
