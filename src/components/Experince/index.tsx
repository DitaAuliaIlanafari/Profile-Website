import { Text, Flex, Timeline } from "@chakra-ui/react";
import {
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline";

export default function Experience() {
  return (
    <Flex
      direction={{ base: "column" }}
      paddingX={{ base: "16px", md: "300px" }}
    >
      <Flex direction={{ base: "column" }} paddingY={{ base: "30px" }}>
        <Text
          color={"indigo"}
          fontSize={{ base: "24px", md: "40px" }}
          textAlign={"center"}
          fontFamily={"Sora"}
          fontWeight={500}
        >
          Experience
        </Text>

        <TimelineRoot paddingTop={{ base: "34px" }}>
          <TimelineItem>
            <TimelineContent width="auto">
              <TimelineTitle whiteSpace="nowrap" color={"black"} fontSize={16}>
                2023 - present
              </TimelineTitle>
            </TimelineContent>
            <TimelineConnector bgColor="indigo.600"></TimelineConnector>
            <Timeline.Content>
              <TimelineTitle
                textAlign="left"
                color={"black"}
                fontSize={20}
                fontWeight="bold"
              >
                Senior Full-Stack Developer
              </TimelineTitle>
              <Text fontSize={14} color={"black"} fontWeight="bold">
                {" "}
                Tech Innovators Inc
              </Text>
              <Text
                textStyle="sm"
                color={"#140C1C"}
                fontSize={{ base: "10px", md: "16px" }}
                textAlign={"left"}
              >
                At Tech Innovators Inc., I lead the development of
                high-performance web applications using React, Node.js, and AWS.
                I manage a team of developers, ensuring timely project delivery
                with a focus on scalability and user experience. One key project
                involved developing a multi-tenant e-commerce platform, which
                improved client sales by 40%.
              </Text>
            </Timeline.Content>
          </TimelineItem>
          <br />
          <TimelineItem>
            <TimelineContent width="auto">
              <TimelineTitle
                whiteSpace="nowrap"
                color={"black"}
                marginRight={5}
                fontSize={16}
              >
                2021 - 2023
              </TimelineTitle>
            </TimelineContent>
            <TimelineConnector bgColor="indigo.500"></TimelineConnector>
            <Timeline.Content>
              <TimelineTitle
                textAlign="justify"
                fontSize={20}
                fontWeight="bold"
                color={"black"}
              >
                Full-Stack Developer
              </TimelineTitle>
              <Text fontSize={14} color={"black"} fontWeight="bold">
                {" "}
                Web Solution Ltd
              </Text>
              <Text
                textStyle="sm"
                color={"#140C1C"}
                fontSize={{ base: "12px", md: "16px" }}
                textAlign={"left"}
              >
                During my time at Web Solutions Ltd., I developed responsive web
                applications using React for the front-end and Express.jsfor the
                back-end. I collaborated with cross-functional teams to design
                and implement new features. A notable project was the creation
                of a real-time chat application for a social networking site,
                which enhanced user engagement by 30%.
              </Text>
            </Timeline.Content>
          </TimelineItem>
          <br />
          <TimelineItem>
            <TimelineContent width="auto">
              <TimelineTitle
                whiteSpace="nowrap"
                color={"black"}
                marginRight={5}
                fontSize={16}
              >
                2018 - 2021
              </TimelineTitle>
            </TimelineContent>
            <TimelineConnector bgColor="indigo.500"></TimelineConnector>
            <Timeline.Content>
              <TimelineTitle
                textAlign="justify"
                fontSize={20}
                fontWeight="bold"
                color={"black"}
              >
                Front-End Developer
              </TimelineTitle>
              <Text fontSize={14} color={"black"} fontWeight="bold">
                {" "}
                Creative Digital Agency
              </Text>
              <Text
                textStyle="sm"
                color={"#140C1C"}
                fontSize={{ base: "12px", md: "16px" }}
                textAlign={"left"}
              >
                As a Front-End Developer at Creative Digital Agency, I focused
                on building and optimizing user interfaces using HTML, CSS,
                JavaScript, and Vue.js.I worked closely with designers to ensure
                pixel-perfect implementation and user-friendly design. I played
                a significant role in redesigning the company’s main website,
                leading to a 25% increase in user retention.
              </Text>
            </Timeline.Content>
          </TimelineItem>
        </TimelineRoot>
      </Flex>
    </Flex>
  );
}
