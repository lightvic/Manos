import axios from "axios"
import { Flex } from "@chakra-ui/react"
import { fetchApi } from "../lib/api"
import DefaultLayout from "../layouts/DefaultLayout"
import SearchLayout from "../layouts/SearchLayout"
import CategoriesSwiper from "../components/shared/CategoriesSwiper"
import { useEffect, useState } from "react"
import Results from "../components/Results"

export const getServerSideProps = async ({ req }) => {
  const users = await fetchApi("/users")

  return {
    props: {
      users,
    },
  }
}

const Home = ({ search }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_PHP_API_URL + "/users.php?job=" + search)
      .then((res) => {
        setData(res.data)
      })
  }, [search])
  if (search) {
    return (
      <>
        <Results search={search} data={data} />
      </>
    )
  } else {
    return (
      <Flex mt={5} flexDirection="column" gap={5}>
        <CategoriesSwiper
          title="Métiers"
          categories={[
            "Menuisiers",
            "Cusinistes",
            "Architectes",
            "Paysagistes",
          ]}
          images={[
            "/assets/metier_menuisier.jpeg",
            "/assets/metier_cuisiniste.jpeg",
            "/assets/metier_architecte.jpeg",
            "/assets/metier_paysagiste.jpeg",
          ]}
        />
        <CategoriesSwiper
          title="Projets"
          categories={[
            "Terrasses",
            "Salles de bain",
            "Escaliers",
            "Bibliothèques",
          ]}
          images={[
            "/assets/projet_terrasse.jpeg",
            "/assets/projet_salle_de_bain.jpeg",
            "/assets/projet_escalier.jpeg",
            "/assets/projet_bibliotheque.jpeg",
          ]}
        />
      </Flex>
    )
  }
}

Home.getLayout = (page) => {
  return (
    <DefaultLayout>
      <SearchLayout>{page}</SearchLayout>
    </DefaultLayout>
  )
}

export default Home
