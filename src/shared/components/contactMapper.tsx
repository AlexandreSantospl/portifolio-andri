import { Flex, Tooltip, Box } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { contact } from "../constants/contact";
import { useEffect } from "react";

const ContactIcon = ({ img, link, label, isWhatsapp = false }: { 
  img: string; 
  link: string; 
  label: string; 
  isWhatsapp?: boolean 
}) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isWhatsapp) {
      const pulse = async () => {
        while (true) {
          await controls.start({
            scale: [1, 1.15, 1],
            boxShadow: [
              "0 0 10px rgba(19, 176, 245, 0.7)",
              "0 0 20px rgba(19, 176, 245, 0.9)",
              "0 0 10px rgba(19, 176, 245, 0.7)"
            ],
            transition: { 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          });
        }
      };
      pulse();
    }
  }, [controls, isWhatsapp]);

  return (
    <Tooltip 
      label={label}
      hasArrow={false}
      placement="top"
      bg="gray.800"
      color="white"
      borderRadius="md"
      px={2}
      py={1}
    >
      <motion.div
        animate={controls}
        style={{
          width: isWhatsapp ? "28px" : "32px",
          height: isWhatsapp ? "28px" : "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          cursor: "pointer",
          background: isWhatsapp 
            ? "linear-gradient(45deg, #13B0F5, #CA24B4)"
            : img === contact[2].img 
              ? "#A7A7A7" 
              : "transparent",
        }}
        whileHover={!isWhatsapp ? {
          scale: 1.2,
          background: "linear-gradient(45deg, #13B0F5, #CA24B4)",
          boxShadow: "0 0 10px rgba(19, 176, 245, 0.7)"
        } : {}}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open(link)}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <Box
          as="img"
          src={img}
          alt={label}
          w={isWhatsapp ? "20px" : "24px"}
          h={isWhatsapp ? "20px" : "24px"}
          objectFit="contain"
          filter="drop-shadow(0 0 2px rgba(0,0,0,0.2))"
        />
      </motion.div>
    </Tooltip>
  );
};

export default function ContactMapper() {
  return (
    <Flex gap={4} align="center">
      {contact.map(({ img, link, label }, index) => (
        <ContactIcon 
          key={index} 
          img={img} 
          link={link} 
          label={label}
          isWhatsapp={label.toLowerCase().includes('whatsapp')}
        />
      ))}
    </Flex>
  );
}