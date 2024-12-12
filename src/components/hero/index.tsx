import photo from "./../../assets/avatar.png";
import { Button, Image, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      direction={{ base: "column" }}
      paddingX={{ base: "16px", md: "50px" }}
      justifyContent={"center"}
    >
      <Flex direction={{ base: "column", md: "row" }}>
        <Flex
          marginTop={{ base: "36px" }}
          marginBottom={{ base: "42px" }}
          justifyContent={{ base: "center" }}
        >
          <Image
            height={{ base: "300px", md: "400px" }}
            width={{ base: "300px", md: "400px" }}
            rounded="md"
            src={photo}
            alt="avatar"
          />
        </Flex>
        <Flex
          direction={{ base: "column" }}
          paddingX={{ base: "16px", md: "50px" }}
          paddingY={{ base: "0px", md: "20px" }}
        >
          <Text
            textAlign={{ base: "center", md: "left" }}
            marginTop={{ base: "2px", md: "80px" }}
            fontWeight={500}
            fontSize={{ base: "24px", md: "36px" }}
            color={"indigo"}
            fontFamily={"Sora"}
          >
            I'm Diana
          </Text>
          <Text
            textAlign={{ base: "center", md: "left" }}
            fontSize={{ base: "24px", md: "40px" }}
            fontWeight={300}
            color={"indigo"}
            marginTop={{ base: "14px" }}
            textUnderlinePosition={"left"}
          >
            Web Developer
          </Text>
          <Text
            textAlign={{ base: "center", md: "left" }}
            fontSize={{ base: "16px", md: "14px" }}
            fontWeight={300}
            color={"#140C1C"}
            marginTop={{ base: "16px" }}
            textUnderlinePosition={"left"}
          >
            I break down complex user experience problems to create integrity
            focussed solutions that connect billions of people
          </Text>
          <Flex justifyContent={{ base: "center", md: "left" }}>
            <Button
              padding={{ base: "15px" }}
              marginTop={{ base: "30px" }}
              fontSize={{ base: "16px", md: "16px" }}
            >
              <Link color={"white"} bgColor={"black"} href="#about">
                Read More
              </Link>{" "}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
