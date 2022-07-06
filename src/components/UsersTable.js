import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

import Header from './shared/Header'

const UsersTable = ({ users }) => {
  return (
    <TableContainer mt={10}>
      <Table variant="simple">
        <Thead>
          <Tr>
            {Object.keys(users[0]).map((key, i) => {
              return <Th key={i}>{key}</Th>
            })}
          </Tr>
        </Thead>
        <Tbody>
          {users.map(user => {
            return (
              <Tr key={user.id}>
                {Object.values(user).map((value, i) => {
                  return <Td key={i}>{value || 'null'}</Td>
                })}
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default UsersTable
