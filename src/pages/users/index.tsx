import Link from 'next/link';
import { RiAddLine } from 'react-icons/ri';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Pagination } from '../../components/Pagination';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />

      <Flex
        width='100%'
        marginY='6'
        maxWidth={1480}
        marginX='auto'
        paddingX='6'
      >
        <Sidebar />

        <Box flex='1' borderRadius={8} background='gray.800' padding='8'>
          <Flex
            marginBottom='8'
            justifyContent='space-between'
            alignItems='center'
          >
            <Heading size='lg' fontWeight='normal'>Usuários</Heading>

            <Link href='/users/create' passHref>
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='pink'
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th paddingX={["4", "4", "6"]} color='gray.300' width='8'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>Usuário</Th>
                { isWideVersion && <Th>Data de cadastro</Th> }
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td paddingX={["4", "4", "6"]}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Jordevá Lucas</Text>
                    <Text fontSize='sm' color='gray.300'>
                      jordevalucas@gmail.com
                    </Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>04 de abril de 2022</Td> }
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
} 