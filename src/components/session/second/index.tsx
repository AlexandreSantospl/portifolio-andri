import { Avatar, Flex, Text } from "@chakra-ui/react";
import MyPicture from "../../../assets/imagens/myPicture.jpg";
import { motion } from "framer-motion";
import { keyframes } from "@chakra-ui/system";

const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export default function Second() {
  return (
    <>
      <Flex
        w={"85%"}
        h={"88vh"}
        align="center"
        justify="space-between"
        textColor={"gray.100"}
        fontSize={"3.65rem"}
        px={8}
      >
        <Flex flexDir="column" justify="center" gap={4}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Text display="flex" alignItems="center" color={"#13B0F5"}>
              Olá
              <motion.span
                animate={{
                  rotate: [0, 14, -8, 14, 0],
                  scale: [1, 1.2, 1.2, 1.1, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                style={{ display: "inline-block", marginLeft: "12px" }}
              >
                👋
              </motion.span>
              ,
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Text color={"#13B0F5"}>Meu nome é</Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Text
              fontWeight="bold"
              bgGradient="linear(to-tl, #CA24B4, #13B0F5, #CA24B4)"
              bgSize="200% 200%"
              animation={`${gradientFlow} 6s ease infinite`}
              bgClip="text"
            >
              Gabriela da Rosa
            </Text>
          </motion.div>
        </Flex>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
        >
          <Avatar
            w={"22rem"}
            h={"22rem"}
            src={MyPicture}
            border="6px solid"
            borderColor="transparent"
            css={{
              background: "linear-gradient(45deg, #CA24B4, #13B0F5)",
              backgroundOrigin: "border-box",
              boxShadow: "0 0 15px rgba(19, 176, 245, 0.5)",
            }}
          />
        </motion.div>
      </Flex>
    </>
  );
}
