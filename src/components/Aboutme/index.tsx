import { Text, Flex } from "@chakra-ui/react";

export default function About() {
  return (
    <Flex
      direction={{ base: "column" }}
      paddingX={{ base: "50px", md: "50px" }}
      paddingTop={"50px"}
      id="about"
    >
      <Flex direction={{ base: "column" }} paddingY={{ base: "30px" }}>
        <Text
          color={"indigo"}
          fontSize={{ base: "24px", md: "40px" }}
          textAlign={"center"}
          fontFamily={"Sora"}
          fontWeight={500}
        >
          About Me
        </Text>

        <Text
          textAlign="center"
          color={"#140C1C"}
          marginTop={{ base: "16px" }}
          fontSize={{ base: "16px", md: "18px" }}
        >
          I'm a passionate full-stack web developer with a strong background in
          computer science and extensive hands-on experience in both front-end
          and back-end technologies. My journey into web development began
          during college, where I quickly developed a fascination for coding and
          problem-solving. Over the years, I've worked on diverse projects, from
          small personal websites to large-scale enterprise applications, honing
          my skills in JavaScript, React, Node.js, Python, and etc. This blend
          of technical expertise and practical experience positions me to tackle
          complex web development challenge and deliver high-quality solutions.
        </Text>
      </Flex>
    </Flex>
  );
}
