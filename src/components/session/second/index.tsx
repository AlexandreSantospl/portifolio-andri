import { Avatar, Flex, Text } from "@chakra-ui/react";
import MyPicture from "../../../assets/imagens/myPicture.png"
export default function Second() {
    return (
        <Flex w={"85%"} h={"88vh"} align="center" justify="space-between" textColor={'gray.100'} fontSize={"3.65rem"}>
            <Flex flexDir="column" justify="center" >
                <Text>
                    Olá 👋,
                </Text>
                <Text>
                    Meu nome é
                </Text>
                <Text
                    fontWeight="bold"
                    bgGradient="linear(to-tl, #CA24B4, #13B0F5)"
                    bgClip="text"
                >
                    {"Alexandre Duarte"}
                </Text>
                <Text>
                    Transformo ideias em soluções.
                </Text>
            </Flex>
            <Avatar
                w={'22rem'}
                h={"22rem"}
                src={MyPicture}
                border="6px solid"
            />
        </Flex >
    );
}
