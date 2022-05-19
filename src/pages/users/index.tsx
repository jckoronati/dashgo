import { Box, Checkbox, Flex, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
    return (
        <Box>
            <Header />
            <Flex
                w="100%"
                my="6"
                maxWidth={1480}
                mx="auto"
                px="6"
            >
                <Sidebar />
                <Box
                    flex="1"
                    border={8}
                    bg="gray.800"
                    p="8"
                >
                    <Flex
                        mb="8"
                        justify="space-between"
                        align="center"
                    >
                        <Table
                            colorScheme="whiteAlpha"
                        >
                            <Thead>
                                <Tr>
                                    <Th
                                        px="6"
                                        color="gray.300"
                                        width="8"
                                    >
                                        <Checkbox colorScheme="pink" />
                                    </Th>
                                    <Th>
                                        Usuário
                                    </Th>
                                    <Th>
                                        Data de Cadastro
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td px="6">
                                        <Checkbox colorScheme="pink" />
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Text fontWeight="bold">
                                                Júlio Cezar Koronati
                                            </Text>
                                        </Box>
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Text fontWeight="bold">
                                                11, de Março, de 2022
                                            </Text>
                                        </Box>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}