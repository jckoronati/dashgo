import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic';
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
});

// Corrigir options, jsx reclama das propriedades validar erro
const options = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        forecolor: theme.colors.gray[500],
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2021-03-18T00:00:00.000Z',
            '2021-03-21T00:00:00.000Z',
            '2021-03-23T00:00:00.000Z',
            '2021-03-25T00:00:00.000Z',
            '2021-03-26T00:00:00.000Z',
        ]
    }
};

const series = [
    { name: 'series1', data: [31, 120, 263, 89, 16] }
];

export default function Dashboard() {
    return (
        <Flex
            direction="column"
            h="100vh"
        >
            <Header />
            <Flex
                w="100%"
                my="6"
                maxWidth={1480}
                mx="auto"
                px="6"
            >
                <Sidebar />
                <SimpleGrid
                    flex="1"
                    gap="4"
                    minChildWidth="320px"
                    alignContent="flex-start"
                >
                    <Box
                        p="8"
                        bgColor="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text
                            fontSize="lg"
                            mb="4"
                        >
                            Inscritos da Semana
                        </Text>
                        <Chart
                            options={options}
                            series={series}
                            type="area"
                            height={160}
                        />
                    </Box>
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                    >
                        <Text
                            fontSize="lg"
                            mb="4"
                        >
                            Taxa de Entrada
                        </Text>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    );
}