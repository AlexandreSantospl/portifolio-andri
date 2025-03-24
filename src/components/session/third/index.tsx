import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { icons } from "./icons";

export default function Third() {
    return (
        <Flex w={"85%"} h={"88vh"} align="center" justify="space-evenly" textColor={'gray.100'} fontSize={"3.65rem"} flexDir={'column'}>
            <Flex flexDir={'column'} align={'center'}>
                <Text fontSize={'3rem'} color={'gray.100'} fontWeight={'bold'}> Meus conhecimentos </Text>
                <Text fontSize={'2rem'} color={'gray.200'} fontWeight={'bold'}> Tecnologias que impulsionam meus projetos</Text>
            </Flex>
            <Grid templateColumns='repeat(6, 1fr)' w={"100%"} gap={14} >
                {icons.map(({ icon, onClick }, index) => (
                    <GridItem colSpan={1} >
                        <Flex w={'100%'} align={'center'} justify={index === 0 || index === 6 || index === 12 ? 'flex-start' : index === 5 || index === 11 || index === 17 ? 'flex-end' : 'center'} >
                            <img
                                key={index}
                                src={icon}
                                alt={icon}
                                style={{ width: "6.5rem", height: "6.5rem", cursor: "pointer", objectFit: "contain" }}
                                onClick={onClick}
                            />

                        </Flex>
                    </GridItem>
                ))}

            </Grid>
        </Flex >
    );
}
