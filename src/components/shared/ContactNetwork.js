import { Box, Text, useMediaQuery, Wrap, WrapItem } from "@chakra-ui/react"
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react"
const ContactNetwork = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)")

  return (
    <Box mb={5}>
      <Text
        fontWeight="bold"
        mt="1.25em"
        mb="2.75em"
        fontSize={["0.875em", "0.875em", "1.5em"]}
      >
        Réseau
      </Text>
      <Box display="flex" justifyContent="center">
        <Box w="17.1875em" h="13.3em" style={{ zoom: isMobile ? 1 : 2 }}>
          <Avatar
            name="Dan Abrahmov"
            src={`https://api-manos.bdph.me/uploads/aa03039b-78f7-4248-aad5-1bedc127ad08.jpg`}
            top="36%"
            left="38%"
            size="lg"
          />

          <Avatar
            name="Kola Tioluwani"
            src={`https://api-manos.bdph.me/uploads/9a212679-8499-40a8-a7af-7d0a2714e3fb.jpeg`}
            size="md"
            top="2.1em"
            right="0.3em"
          />

          <Avatar
            name="Kent Dodds"
            src={`https://api-manos.bdph.me/uploads/81f69bc8-816e-4bbd-89eb-89a828d607ed.jpg`}
            size="md"
            top="0.6em"
            left="1.7em"
          />

          <Avatar
            name="Ryan Florence"
            src={`https://api-manos.bdph.me/uploads/a176d2ac-93e2-4b38-b4a5-faa2af6fa657.jpg`}
            size="md"
            top="4em"
            left="1.6em"
          />

          <Avatar
            name="Prosper Otemuyiwa"
            src={`https://api-manos.bdph.me/uploads/290f495e-2269-4434-9750-ae5847b871cd.jpeg`}
            size="md"
            top="7.5em"
            right="1.7em"
          />
          <Avatar
            name="Prosper Otemuyiwa"
            src={`https://api-manos.bdph.me/uploads/d902f718-c30f-45cf-a315-9f3a7cadef18.jpeg`}
            size="md"
            top="2.5em"
            left="2.5em"
          />
          <Avatar
            name="Prosper Otemuyiwa"
            src={`https://api-manos.bdph.me/uploads/e9f8e3b7-ebef-4eb4-b8a6-d13cfca1e63d.jpg`}
            size="md"
            top="4.5em"
            left="2.5em"
          />
          <Avatar
            name="Christian Nwamba"
            src={`https://api-manos.bdph.me/uploads/jgrmhdrxhdxrklj.jpeg`}
            size="sm"
            top="0.7em"
            right="5.8em"
          />
          <Avatar
            name="Segun Adebayo"
            src={`https://api-manos.bdph.me/uploads/oihsefhseofijofsie.jpeg`}
            size="xs"
            top="5.5em"
            right="13.3em"
          />
          <Avatar
            name="Segun Adebayo"
            src={`https://api-manos.bdph.me/uploads/d44e5d57-e924-4cd0-9353-6af353d72c4a.jpeg`}
            size="xs"
            top="12em"
            right="12.5em"
          />
          <Avatar
            name="Segun Adebayo"
            src={`https://media.discordapp.net/attachments/912787678628565032/990971167907147776/avatar-4d2d5b40d40940b935cdb46e8415556e.jpg`}
            size="xs"
            top="12.7em"
            right="3em"
          />
          <Avatar
            name="Segun Adebayo"
            src={`https://media.discordapp.net/attachments/912787678628565032/990971168171384882/avatar-f6b809f5f9dfadb6b791e885a394d9c1.jpg`}
            size="xs"
            top="10.3em"
            left="5.4em"
          />
          <Avatar
            name="Segun Adebayo"
            src={`https://media.discordapp.net/attachments/912787678628565032/990971168431423528/electricien-equipement-alternance.jpeg`}
            size="xs"
            bottom="6.6em"
            right="14em"
          />
          <Avatar
            name="Segun Adebayo"
            src={`https://media.discordapp.net/attachments/912787678628565032/990971725846020096/telechargement.png`}
            size="xs"
            bottom="2em"
            right="2em"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default ContactNetwork
