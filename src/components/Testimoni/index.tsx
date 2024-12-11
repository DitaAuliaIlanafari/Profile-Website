import { Text, Stack, Flex, Box } from "@chakra-ui/react";
import { Rating } from "@/components/ui/rating";
import { Avatar } from "@/components/ui/avatar";

export default function Testimoni() {
  return (
    <Flex
      direction={{ base: "column" }}
      paddingX={{ base: "16px", md: "50px" }}
    >
      <Flex direction={{ base: "column" }} paddingY={{ base: "30px" }}>
        <Text
          color={"Indigo"}
          fontSize={{ base: "24px", md: "40px" }}
          textAlign={"center"}
          fontFamily={"Sora"}
          fontWeight={"500"}
        >
          Testimonials
        </Text>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="center"
          gap={{ base: "32px", md: "50px" }}
          paddingY={"50px"}
        >
          <Box
            borderWidth="1px"
            background="grey.50"
            borderColor="black"
            padding={"16px"}
            rounded={"2xl"}
            _hover={{ borderColor: "indigo" }}
            width={{ base: "", md: "400px" }}
          >
            <Flex
              direction={"column"}
              justifyContent={"space-between"}
              height={"100%"}
              gap={"16px"}
            >
              <Flex gap="6">
                <Avatar
                  name="John Smith"
                  src="https://randomuser.me/api/portraits/men/70.jpg"
                />
                <Stack textStyle="sm" gap="0" textAlign={"left"}>
                  <Text fontWeight="medium" color={"black"}>
                    John smith
                  </Text>
                  <Text color="fg.muted">CEO of XYZ Retail</Text>
                </Stack>
              </Flex>

              <Flex direction={"column"} gap={"14px"}>
                <Rating
                  colorPalette="orange"
                  readOnly
                  size="sm"
                  defaultValue={5}
                />
                <Text color={"black"} fontWeight={400} textAlign={"left"}>
                  Working with Diana was an absolute pleasure. Their expertise
                  in developing our e-commerce platform was evident from the
                  start and also good in communication skill.
                </Text>
              </Flex>
            </Flex>
          </Box>

          <Box
            borderWidth="1px"
            background="grey.50"
            borderColor="black"
            padding={"16px"}
            rounded={"2xl"}
            _hover={{ borderColor: "indigo" }}
            width={{ base: "", md: "400px" }}
          >
            <Flex
              direction={"column"}
              justifyContent={"space-between"}
              height={"100%"}
              gap={"16px"}
            >
              <Flex gap="6">
                <Avatar
                  name="Emily Brown"
                  src="https://img.freepik.com/free-photo/professional-asian-businesswoman-gray-blazer_53876-105180.jpg?uid=R175953268&ga=GA1.1.1807638549.1732421243&semt=ais_hybrid"
                />
                <Stack textStyle="sm" gap="0" textAlign={"left"}>
                  <Text fontWeight="medium" color={"black"}>
                    Emily Brown
                  </Text>
                  <Text color="fg.muted">Team Lead at Tech Innovators Inc</Text>
                </Stack>
              </Flex>
              <Flex direction={"column"} gap={"14px"}>
                <Rating
                  colorPalette="orange"
                  readOnly
                  size="sm"
                  defaultValue={5}
                />
                <Text color={"black"} fontWeight={400} textAlign={"left"}>
                  Collaborating with Diana on several high-stakes projects has
                  been a highlight of my career. Their ability to lead a team
                  while maintaining a clear vision for the project is truly
                  impressive.
                </Text>
              </Flex>
            </Flex>
          </Box>

          <Box
            borderWidth="1px"
            background="grey.50"
            borderColor="black"
            padding={"16px"}
            rounded={"2xl"}
            _hover={{ borderColor: "indigo" }}
            width={{ base: "", md: "400px" }}
          >
            <Flex
              direction={"column"}
              justifyContent={"space-between"}
              height={"100%"}
              gap={"16px"}
            >
              <Flex gap="6">
                <Avatar
                  name="Michael Carter"
                  src="https://img.freepik.com/free-photo/young-employee-enjoying-sunny-day_23-2147562347.jpg?uid=R175953268&ga=GA1.1.1807638549.1732421243&semt=ais_hybrid"
                />
                <Stack textStyle="sm" gap="0" textAlign={"left"}>
                  <Text fontWeight="medium" color={"black"}>
                    Michael Carter
                  </Text>
                  <Text color="fg.muted">
                    Project Manager at Web Solution Ltd.
                  </Text>
                </Stack>
              </Flex>
              <Flex direction={"column"} gap={"14px"}>
                <Rating
                  colorPalette="orange"
                  readOnly
                  size="sm"
                  defaultValue={5}
                />
                <Text color={"black"} fontWeight={400} textAlign={"left"}>
                  Working with Diana was a seamless experience. Their proactive
                  approach and attention to detail ensured that our projects
                  were completed on time and to a high standard.
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
