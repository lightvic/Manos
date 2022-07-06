import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react"
import { Box, Flex } from "@chakra-ui/react"
import { Center, Circle } from "@chakra-ui/react"

const PlanningCard = ({
  month,
  week1 = false,
  week2 = false,
  week3 = false,
  week4 = false,
}) => {
  return (
    <Flex justifyContent="center" mb={10}>
      <Box w={["30em", "30em", "48em"]}>
        <Box
          borderWidth="0.0625em"
          borderRadius="0.625em"
          overflow="hidden"
          ml="1em"
          mr="1em"
          h={["19em", "19em", "35em"]}
        >
          {/* la table du mois */}
          <TableContainer>
            <Center
              h={["3.4375em", "3.4375em", "2.5em"]}
              color="Black"
              justifyContent="space-evenly"
              alignItems={["flex-end", "flex-end", null]}
              fontSize={["1em", "1em", "2em"]}
              fontWeight="medium"
              className="month"
            >
              {month} 2022
            </Center>
            <Table
              variant="simple"
              display="grid"
              gridTemplateRows={["3em 12.5em", "3em 12.5em", "5em 25em"]}
              alignItems={[null, "center"]}
            >
              {/* les jours de la semaine */}
              <Thead className="planning_thead">
                <Tr
                  h="4em"
                  fontSize={["0.75em", "0.75em", "1.8em"]}
                  display="grid"
                  gridTemplateColumns={[
                    "repeat(7,2.525em)",
                    "repeat(7,2.525em)",
                    "repeat(7,3em)",
                  ]}
                  justifyContent="center"
                  justifyItems="center"
                  alignItems="center"
                >
                  <Th color="#999A99" textTransform="none">
                    Lun
                  </Th>
                  <Th color="#999A99" textTransform="none">
                    Mar
                  </Th>
                  <Th color="#999A99" textTransform="none">
                    Mer
                  </Th>
                  <Th color="#999A99" textTransform="none">
                    Jeu
                  </Th>
                  <Th color="#999A99" textTransform="none">
                    Ven
                  </Th>
                  <Th color="#999A99" textTransform="none">
                    Sam
                  </Th>
                  <Th color="#999A99" textTransform="none">
                    Dim
                  </Th>
                </Tr>
              </Thead>
              {/* il y'a tout les dates du mois */}
              <Tbody
                className="planning_tbody"
                h={["13.2em", "13.2em", "25em"]}
                display="grid"
                alignItems="center"
                gridTemplateRows={[
                  "repeat(7,1.875em)",
                  "repeat(7,1.875em)",
                  "repeat(7,4em)",
                ]}
              >
                <Tr
                  display="grid"
                  gridTemplateColumns={[
                    "repeat(7,1.875em)",
                    "repeat(7,1.875em)",
                    "repeat(7,3em)",
                  ]}
                  fontSize={["1em", "1em", "1.8em"]}
                  justifyContent="center"
                  justifyItems="center"
                  alignItems="center"
                >
                  <Td color="#E5E4E2">27</Td>
                  <Td color="#E5E4E2">28</Td>
                  <Td color="#E5E4E2">29</Td>
                  <Td color="#E5E4E2">30</Td>
                  <Td color="#E5E4E2">31</Td>
                  <Td>1</Td>
                  <Td>2</Td>
                </Tr>

                {week1 ? (
                  <Tr
                    display="grid"
                    gridTemplateColumns={[
                      "repeat(7,1.875em)",
                      "repeat(7,1.875em)",
                      "repeat(7,3em)",
                    ]}
                    fontSize={["1em", "1em", "1.8em"]}
                    justifyContent="center"
                    justifyItems="center"
                    alignItems="center"
                  >
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        3
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        4
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        5
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        6
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        7
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        8
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        9
                      </Circle>
                    </Td>
                  </Tr>
                ) : (
                  <Tr
                    display="grid"
                    gridTemplateColumns={[
                      "repeat(7,1.875em)",
                      "repeat(7,1.875em)",
                      "repeat(7,3em)",
                    ]}
                    fontSize={["1em", "1em", "1.8em"]}
                    justifyContent="center"
                    justifyItems="center"
                    alignItems="center"
                  >
                    <Td>3</Td>
                    <Td>4</Td>
                    <Td>5</Td>
                    <Td>6</Td>
                    <Td>7</Td>
                    <Td>8</Td>
                    <Td>9</Td>
                  </Tr>
                )}
                {week2 ? (
                  <Tr
                    display="grid"
                    gridTemplateColumns={[
                      "repeat(7,1.875em)",
                      "repeat(7,1.875em)",
                      "repeat(7,3em)",
                    ]}
                    fontSize={["1em", "1em", "1.8em"]}
                    justifyContent="center"
                    justifyItems="center"
                    alignItems="center"
                  >
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        10
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        11
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        12
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        13
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        14
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        15
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        16
                      </Circle>
                    </Td>
                  </Tr>
                ) : (
                  <Tr
                    display="grid"
                    gridTemplateColumns={[
                      "repeat(7,1.875em)",
                      "repeat(7,1.875em)",
                      "repeat(7,3em)",
                    ]}
                    fontSize={["1em", "1em", "1.8em"]}
                    justifyContent="center"
                    justifyItems="center"
                    alignItems="center"
                  >
                    <Td>10</Td>
                    <Td>11</Td>
                    <Td>12</Td>
                    <Td>13</Td>
                    <Td>14</Td>
                    <Td>15</Td>
                    <Td>16</Td>
                  </Tr>
                )}
                {week3 ? (
                  <Tr
                    display="grid"
                    gridTemplateColumns={[
                      "repeat(7,1.875em)",
                      "repeat(7,1.875em)",
                      "repeat(7,3em)",
                    ]}
                    fontSize={["1em", "1em", "1.8em"]}
                    justifyContent="center"
                    justifyItems="center"
                    alignItems="center"
                  >
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        17
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        18
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        19
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        20
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        21
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        22
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        23
                      </Circle>
                    </Td>
                  </Tr>
                ) : (
                  <Tr
                    display="grid"
                    gridTemplateColumns={[
                      "repeat(7,1.875em)",
                      "repeat(7,1.875em)",
                      "repeat(7,3em)",
                    ]}
                    fontSize={["1em", "1em", "1.8em"]}
                    justifyContent="center"
                    justifyItems="center"
                    alignItems="center"
                  >
                    <Td>17</Td>
                    <Td>18</Td>
                    <Td>19</Td>
                    <Td>20</Td>
                    <Td>21</Td>
                    <Td>22</Td>
                    <Td>23</Td>
                  </Tr>
                )}
                {week4 ? (
                  <Tr
                    display="grid"
                    gridTemplateColumns={[
                      "repeat(7,1.875em)",
                      "repeat(7,1.875em)",
                      "repeat(7,3em)",
                    ]}
                    fontSize={["1em", "1em", "1.8em"]}
                    justifyContent="center"
                    justifyItems="center"
                    alignItems="center"
                  >
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        24
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        25
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        26
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        27
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        28
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        29
                      </Circle>
                    </Td>
                    <Td>
                      <Circle
                        size="2em"
                        backgroundColor="#FF6047"
                        color="white"
                      >
                        30
                      </Circle>
                    </Td>
                  </Tr>
                ) : (
                  <Tr
                    display="grid"
                    gridTemplateColumns={[
                      "repeat(7,1.875em)",
                      "repeat(7,1.875em)",
                      "repeat(7,3em)",
                    ]}
                    fontSize={["1em", "1em", "1.8em"]}
                    justifyContent="center"
                    justifyItems="center"
                    alignItems="center"
                  >
                    <Td>24</Td>
                    <Td>25</Td>
                    <Td>26</Td>
                    <Td>27</Td>
                    <Td>28</Td>
                    <Td>29</Td>
                    <Td>30</Td>
                  </Tr>
                )}
                <Tr
                  display="grid"
                  gridTemplateColumns={[
                    "repeat(7,1.875em)",
                    "repeat(7,1.875em)",
                    "repeat(7,3em)",
                  ]}
                  fontSize={["1em", "1em", "1.8em"]}
                  justifyContent="center"
                  justifyItems="center"
                  alignItems="center"
                >
                  <Td>31</Td>
                  <Td color="#A8A9A8">1</Td>
                  <Td color="#A8A9A8">2</Td>
                  <Td color="#A8A9A8">3</Td>
                  <Td color="#A8A9A8">4</Td>
                  <Td color="#A8A9A8">5</Td>
                  <Td color="#A8A9A8">6</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Flex>
  )
}

export default PlanningCard
