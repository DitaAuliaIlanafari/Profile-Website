import { Text, Flex, Image, Span, Grid, Box } from "@chakra-ui/react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Portofolio() {
  return (
    <Flex
      direction={{ base: "column" }}
      paddingX={{ base: "16px", md: "300px" }}
      id="portofolio"
    >
      <Flex direction={{ base: "column" }} paddingY={{ base: "30px" }}>
        <Text
          color={"indigo"}
          fontSize={{ base: "24px", md: "40px" }}
          textAlign={"center"}
          fontFamily={"Sora"}
          fontWeight={500}
        >
          {" "}
          Portofolio{" "}
        </Text>
        <Flex direction={{ base: "column" }} paddingTop={"34px"}>
          <Flex
            direction={{ base: "row", md: "column" }}
            justifyContent={"center"}
          >
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
              justifyContent={"center"}
              gap="8"
            >
              <DialogRoot
                size="lg"
                placement="center"
                motionPreset="slide-in-bottom"
                scrollBehavior="inside"
              >
                <DialogTrigger asChild>
                  <Box
                    justifyItems={"center"}
                    marginTop={"10px"}
                    backgroundColor={"gray.600"}
                    _hover={{ backgroundColor: "indigo" }}
                    color={"white"}
                    minWidth={{ base: "102px", md: "200px" }}
                  >
                    <Image
                      height={{ base: "200px", md: "200px" }}
                      src="https://i.pinimg.com/736x/d0/32/1f/d0321f0e442e46e108bd8648740d67d3.jpg"
                      alt="e-commerce"
                    />
                    <Flex direction={"column"} width={"100%"} padding={"10px"}>
                      <Text
                        fontSize={{ base: "16px", md: "14px" }}
                        textAlign={"left"}
                      >
                        {" "}
                        E-Commerce Platform for XYZ Retail
                      </Text>
                      <Text
                        fontSize={{ base: "16px", md: "14px" }}
                        textAlign={"left"}
                      >
                        Technologies: Node.JS, MongoDB
                      </Text>
                    </Flex>
                  </Box>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle
                      fontWeight={500}
                      fontSize={30}
                      textAlign={"center"}
                      padding={"10px"}
                    >
                      E-Commerce Platform for XYZ Retail
                    </DialogTitle>
                    <DialogCloseTrigger />
                  </DialogHeader>
                  <DialogBody>
                    <Text as={Span} fontWeight={600} fontSize={20}>
                      Situation:
                    </Text>
                    <Text textAlign="justify">
                      A health and fitness company wanted to create a mobile
                      application that allowed users to track their workouts,
                      monitor their progress, and receive personalized fitness
                      recommendations. The app needed to be interactive and
                      provide real-time data analysis.
                    </Text>
                    <br />
                    <Text as={Span} fontWeight={600} fontSize={20}>
                      Task:
                    </Text>
                    <Text textAlign="justify">
                      I was responsible for building both the front-end and
                      back-end components of the platform, ensuring seamless
                      integration with the client's inventory and payment
                      systems. The primary goal was to create an efficient,
                      high-performing application with a smooth user experience.
                    </Text>
                    <br />
                    <Text as={Span} fontWeight={600} fontSize={20}>
                      Action:
                    </Text>
                    <Text textAlign="justify">
                      Using React for the front-end, I designed a responsive and
                      intuitive UI to enhance user engagement and ease of
                      navigation. For the back-end, I developed RESTful APIs
                      with Node.jsand MongoDB for robust data management.
                      Additionally, I integrated the platform with AWS to
                      optimize load times and set up a CI/CD pipeline for
                      efficient deployment and testing. Collaboration with
                      designers and QA ensured adherence to usability and
                      accessibility standards.
                    </Text>
                    <br />
                    <Text as={Span} fontWeight={600} fontSize={20}>
                      Result:
                    </Text>
                    <Text textAlign="justify">
                      The project was completed on time, resulting in a 35%
                      increase in online sales within the first three months.
                      User feedback highlighted the site's speed and ease of
                      use, while the client reported a substantial reduction in
                      manual inventory management tasks.
                    </Text>
                  </DialogBody>
                </DialogContent>
              </DialogRoot>

              <DialogRoot
                size="lg"
                placement="center"
                motionPreset="slide-in-bottom"
                scrollBehavior="inside"
              >
                <DialogTrigger asChild>
                  <Box
                    justifyItems={"center"}
                    marginTop={"10px"}
                    backgroundColor={"gray.600"}
                    _hover={{ backgroundColor: "indigo" }}
                    color={"white"}
                    minWidth={{ base: "102px", md: "200px" }}
                  >
                    <Image
                      height={{ base: "200px", md: "200px" }}
                      src="https://i.pinimg.com/736x/67/dc/f2/67dcf29eab20348e1cf01fb32df18f75.jpg"
                      alt="e-commerce"
                    />
                    <Flex direction={"column"} width={"100%"} padding={"10px"}>
                      <Text
                        fontSize={{ base: "16px", md: "14px" }}
                        textAlign={"left"}
                      >
                        {" "}
                        Social Networking App for Student
                      </Text>
                      <Text
                        fontSize={{ base: "16px", md: "14px" }}
                        textAlign={"left"}
                      >
                        Technologies: React Native, Firebase
                      </Text>
                    </Flex>
                  </Box>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle
                      fontWeight={500}
                      fontSize={30}
                      textAlign={"center"}
                      padding={"10px"}
                    >
                      E-Commerce Platform for XYZ Retail
                    </DialogTitle>
                    <DialogCloseTrigger />
                  </DialogHeader>
                  <DialogBody>
                    <Text as={Span} fontWeight={600} fontSize={20}>
                      Situation:
                    </Text>
                    <Text textAlign="justify">
                      A startup aimed to create a social networking app
                      specifically for college students to help them connect,
                      collaborate, and share resources. The app needed to be
                      engaging and secure, providing features like user
                      profiles, event management, and real-time messaging.
                    </Text>
                    <br />
                    <Text as={Span} fontWeight={600} fontSize={20}>
                      Task:
                    </Text>
                    <Text textAlign="justify">
                      I was tasked with developing the app's core features,
                      focusing on creating an engaging user experience and
                      ensuring data security. This included implementing user
                      authentication, profile management, and a chat system.
                    </Text>
                    <br />
                    <Text as={Span} fontWeight={600} fontSize={20}>
                      Action:
                    </Text>
                    <Text textAlign="justify">
                      Using React Native, I developed a cross-platform mobile
                      application to ensure compatibility with both iOS and
                      Android devices. I implemented Firebase for real-time data
                      synchronization and user authentication. For the chat
                      system, I integrated WebSocket for real-time
                      communication. I also worked on the app's UI/UX design to
                      make it visually appealing and easy to navigate.
                    </Text>
                    <br />
                    <Text as={Span} fontWeight={600} fontSize={20}>
                      Result:
                    </Text>
                    <Text textAlign="justify">
                      The app received positive feedback from users for its
                      seamless performance and user-friendly interface. It
                      achieved over 10,000 downloads within the first month of
                      launch, and users reported improved communication and
                      collaboration on campus.
                    </Text>
                  </DialogBody>
                </DialogContent>
              </DialogRoot>

              <DialogRoot
                size="lg"
                placement="center"
                motionPreset="slide-in-bottom"
                scrollBehavior="inside"
              >
                <DialogTrigger asChild>
                  <Box
                    justifyItems={"center"}
                    marginTop={"10px"}
                    backgroundColor={"gray.600"}
                    _hover={{ backgroundColor: "indigo" }}
                    color={"white"}
                    minWidth={{ base: "102px", md: "200px" }}
                  >
                    <Image
                      height={{ base: "200px", md: "200px" }}
                      src="https://i.pinimg.com/736x/e9/8e/5c/e98e5ca02377481977c4f6dcaff12ec9.jpg"
                      alt="e-commerce"
                    />
                    <Flex direction={"column"} width={"100%"} padding={"10px"}>
                      <Text
                        fontSize={{ base: "16px", md: "14px" }}
                        textAlign={"left"}
                      >
                        {" "}
                        Health and Fitness Tracking Application
                      </Text>
                      <Text
                        fontSize={{ base: "16px", md: "14px" }}
                        textAlign={"left"}
                      >
                        Technologies: React Native, Firebase
                      </Text>
                    </Flex>
                  </Box>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle
                      fontWeight={500}
                      fontSize={30}
                      textAlign={"center"}
                      padding={"10px"}
                    >
                      Health and Fitness Tracking Application
                    </DialogTitle>
                    <DialogCloseTrigger />
                  </DialogHeader>
                  <DialogBody>
                    <Text as={Span} fontWeight={600} fontSize={20}>
                      Situation:
                    </Text>
                    <Text textAlign="justify">
                      A health and fitness company wanted to create a mobile
                      application that allowed users to track their workouts,
                      monitor their progress, and receive personalized fitness
                      recommendations. The app needed to be interactive and
                      provide real-time data analysis.
                    </Text>
                    <br />
                    <Text as={Span} fontWeight={600} fontSize={20}>
                      Task:
                    </Text>
                    <Text textAlign="justify">
                      I was responsible for developing the application’s key
                      features, including workout tracking, progress monitoring,
                      and personalized recommendations based on user data.
                      Ensuring data accuracy and user privacy was also a top
                      priority.
                    </Text>
                    <br />
                    <Text as={Span} fontWeight={600} fontSize={20}>
                      Action:
                    </Text>
                    <Text textAlign="justify">
                      I used React Native to build a cross-platform mobile app,
                      ensuring it was available on both iOS and Android. For
                      data storage and retrieval, I integrated Firebase,
                      providing real-time updates and secure user
                      authentication. I implemented an algorithm to analyze user
                      data and generate personalized fitness recommendations.
                      The app's UI was designed to be intuitive and
                      motivational, encouraging users to stay active and track
                      their progress.
                    </Text>
                    <br />
                    <Text as={Span} fontWeight={600} fontSize={20}>
                      Result:
                    </Text>
                    <Text textAlign="justify">
                      The application saw a high user engagement rate, with
                      users frequently logging their workouts and tracking their
                      progress. It was featured in several health and fitness
                      blogs, leading to a 20% increase in downloads each month.
                      User feedback highlighted the app's ease of use and the
                      effectiveness of personalized recommendations.
                    </Text>
                  </DialogBody>
                </DialogContent>
              </DialogRoot>

              <DialogRoot
                size="lg"
                placement="center"
                motionPreset="slide-in-bottom"
                scrollBehavior="inside"
              >
                <DialogTrigger asChild>
                  <Box
                    justifyItems={"center"}
                    marginTop={"10px"}
                    backgroundColor={"gray.600"}
                    _hover={{ backgroundColor: "indigo" }}
                    color={"white"}
                    minWidth={{ base: "102px", md: "200px" }}
                  >
                    <Image
                      height={{ base: "200px", md: "200px" }}
                      src="https://i.pinimg.com/736x/b7/59/a8/b759a8ef753e9cc9289f843ac915a9ee.jpg"
                      alt="e-commerce"
                    />
                    <Flex direction={"column"} width={"100%"} padding={"10px"}>
                      <Text
                        fontSize={{ base: "16px", md: "14px" }}
                        textAlign={"left"}
                      >
                        {" "}
                        Educational Platform for Online Course
                      </Text>
                      <Text
                        fontSize={{ base: "16px", md: "14px" }}
                        textAlign={"left"}
                      >
                        Technologies: React, Node.JS, Express
                      </Text>
                    </Flex>
                  </Box>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle
                      fontWeight={500}
                      fontSize={30}
                      textAlign={"center"}
                      padding={"10px"}
                    >
                      Technologies: React, Node.JS, Express
                    </DialogTitle>
                    <DialogCloseTrigger />
                  </DialogHeader>
                  <DialogBody>
                    <Text as={Span} fontWeight={600} fontSize={20}>
                      Situation:
                    </Text>
                    <Text textAlign="justify">
                      An educational institution aimed to create an online
                      platform to offer courses to students worldwide. The
                      platform needed to support features like video lectures,
                      quizzes, discussion forums, and progress tracking to
                      enhance the learning experience.
                    </Text>
                    <br />
                    <Text as={Span} fontWeight={600} fontSize={20}>
                      Task:
                    </Text>
                    <Text textAlign="justify">
                      My role was to develop the platform’s front-end and
                      back-end, ensuring it could handle a large number of users
                      simultaneously and provide a seamless learning experience.
                      Key features included user registration, course
                      management, and interactive content delivery.
                    </Text>
                    <br />
                    <Text as={Span} fontWeight={600} fontSize={20}>
                      Action:
                    </Text>
                    <Text textAlign="justify">
                      I built the front-end using React, focusing on creating a
                      responsive and accessible UI. For the back-end, I used
                      Node.jsand Express to develop APIs for user management,
                      course content delivery, and progress tracking. I also
                      integrated a video streaming service to handle lecture
                      content. To support real-time interactions, I implemented
                      WebSocket for discussion forums and live quizzes.
                    </Text>
                    <br />
                    <Text as={Span} fontWeight={600} fontSize={20}>
                      Result:
                    </Text>
                    <Text textAlign="justify">
                      The platform successfully launched, attracting over 50,000
                      registered users in the first six months. Students praised
                      the platform for its interactive features and smooth
                      performance. The institution reported a significant
                      increase in course enrollments and positive feedback from
                      both students and instructors.
                    </Text>
                  </DialogBody>
                </DialogContent>
              </DialogRoot>
            </Grid>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
