import { Text, Box, Image, Flex } from "@chakra-ui/react";
import Phyton from "../../../src/assets/python-logo.png";
import MySql from "../../../src/assets/mysql_PNG23.png";

export default function Skill() {
  return (
    <Flex
      direction={{ base: "column" }}
      paddingX={{ base: "50px", md: "50px" }}
    >
      <Flex direction={{ base: "column" }} paddingY={{ base: "30px" }}>
        <Text
          color={"Indigo"}
          fontSize={{ base: "24px", md: "40px" }}
          textAlign={"center"}
          fontFamily={"Sora"}
          fontWeight={"500"}
        >
          My Skill
        </Text>

        <Flex direction={{ base: "column" }} paddingTop={"24px"}>
          <Flex
            gap={{ base: "6px", md: "32px" }}
            justifyContent={"center"}
            wrap={"wrap"}
          >
            <Box
              justifyItems={"center"}
              marginTop={"10px"}
              rounded={"lg"}
              backgroundColor={"gray.600"}
              color={"white"}
              padding={{ base: "8px", md: "10px" }}
              _hover={{ backgroundColor: "indigo", color: "black" }}
              minWidth={{ base: "102px", md: "200px" }}
            >
              <Image
                height={{ base: "50px", md: "80px" }}
                marginTop={"12px"}
                src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                alt="Javascript"
              />
              <Text
                fontSize={{ base: "16px", md: "14px" }}
                textAlign={"center"}
                marginTop={"5px"}
              >
                {" "}
                Javascript
              </Text>
            </Box>
            <Box
              justifyItems={"center"}
              marginTop={"10px"}
              rounded={"lg"}
              backgroundColor={"gray.600"}
              color={"white"}
              padding={{ base: "8px", md: "10px" }}
              _hover={{ backgroundColor: "indigo", color: "black" }}
              minWidth={{ base: "102px", md: "200px" }}
            >
              <Image
                height={{ base: "50px", md: "100px" }}
                src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png"
                alt="HTML"
              />
              <Text
                fontSize={{ base: "16px", md: "14px" }}
                textAlign={"center"}
              >
                {" "}
                HTML
              </Text>
            </Box>
            <Box
              justifyItems={"center"}
              marginTop={"10px"}
              rounded={"lg"}
              backgroundColor={"gray.600"}
              padding={{ base: "8px", md: "10px" }}
              color={"white"}
              _hover={{ backgroundColor: "indigo", color: "black" }}
              minWidth={{ base: "102px", md: "200px" }}
            >
              <Image
                height={{ base: "50px", md: "100px" }}
                src="https://img.icons8.com/fluent/200/css3.png"
                alt="CSS"
              />
              <Text
                fontSize={{ base: "16px", md: "14px" }}
                textAlign={"center"}
              >
                {" "}
                CSS
              </Text>
            </Box>
            <Box
              justifyItems={"center"}
              marginTop={"10px"}
              rounded={"lg"}
              backgroundColor={"gray.600"}
              padding={{ base: "8px", md: "10px" }}
              color={"white"}
              _hover={{ backgroundColor: "indigo", color: "black" }}
              minWidth={{ base: "102px", md: "200px" }}
            >
              <Image
                height={{ base: "50px", md: "90px" }}
                marginTop={"12px"}
                src={Phyton}
                alt="Python"
              />
              <Text
                fontSize={{ base: "16px", md: "14px" }}
                marginTop={"5px"}
                textAlign={"center"}
              >
                {" "}
                Python
              </Text>
            </Box>
          </Flex>
        </Flex>

        <Flex
          direction={{ base: "column" }}
          paddingTop={{ base: "6px", md: "32px" }}
        >
          <Flex
            gap={{ base: "6px", md: "32px" }}
            justifyContent={"center"}
            wrap={"wrap"}
          >
            <Box
              justifyItems={"center"}
              marginTop={"10px"}
              rounded={"lg"}
              backgroundColor={"gray.600"}
              padding={{ base: "8px", md: "10px" }}
              color={"white"}
              _hover={{ backgroundColor: "indigo", color: "black" }}
              minWidth={{ base: "102px", md: "200px" }}
            >
              <Image
                height={{ base: "50px", md: "100px" }}
                src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"
              />

              <Text
                fontSize={{ base: "16px", md: "14px" }}
                textAlign={"center"}
              >
                {" "}
                React
              </Text>
            </Box>

            <Box
              justifyItems={"center"}
              marginTop={"10px"}
              rounded={"lg"}
              backgroundColor={"gray.600"}
              padding={{ base: "8px", md: "10px" }}
              _hover={{ backgroundColor: "indigo", color: "black" }}
              color={"white"}
              minWidth={{ base: "102px", md: "200px" }}
            >
              <Image
                height={{ base: "50px", md: "100px" }}
                src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256"
              />
              <Text
                fontSize={{ base: "16px", md: "14px" }}
                textAlign={"center"}
              >
                {" "}
                Node JS
              </Text>
            </Box>
            <Box
              justifyItems={"center"}
              marginTop={"10px"}
              rounded={"lg"}
              backgroundColor={"gray.600"}
              padding={{ base: "8px", md: "10px" }}
              _hover={{ backgroundColor: "indigo", color: "black" }}
              color={"white"}
              minWidth={{ base: "102px", md: "200px" }}
            >
              <Image height={{ base: "50px", md: "100px" }} src={MySql} />
              <Text
                fontSize={{ base: "16px", md: "14px" }}
                textAlign={"center"}
              >
                {" "}
                MySql
              </Text>
            </Box>
            <Box
              justifyItems={"center"}
              marginTop={"10px"}
              rounded={"lg"}
              backgroundColor={"gray.600"}
              padding={{ base: "8px", md: "10px" }}
              _hover={{ backgroundColor: "indigo", color: "black" }}
              color={"white"}
              minWidth={{ base: "102px", md: "200px" }}
            >
              <Image
                height={{ base: "50px", md: "100px" }}
                src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              />
              <Text
                fontSize={{ base: "16px", md: "14px" }}
                textAlign={"center"}
              >
                {" "}
                GIT
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
