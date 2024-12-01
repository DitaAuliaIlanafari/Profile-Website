import { Text, Flex, Box} from "@chakra-ui/react"
import { Button } from "@/components/ui/button"
import {
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import style from './portfolio.module.css'


export default function Portfolio(){
    return(
        <div className={style["container"]} id="portfolio">
            <h1 className={style['h1']}> Portfolio </h1>
            <Flex justify='center'>
                <DialogRoot scrollBehavior='inside' size='md' >
                    <Box maxW="xs" backgroundColor='black' marginTop={30}>
                        <img src="https://i.pinimg.com/736x/d0/32/1f/d0321f0e442e46e108bd8648740d67d3.jpg" alt="post1" />
                        <Text fontWeight='medium' color='white' margin={2.5}>
                        E-Commerce Platform for XYZ Retail
                        Technologies: Node.JS, MongoDB
                        </Text>
                        <DialogTrigger asChild>
                            <Button variant='outline' color='white' margin={2.5}>Read More...</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle fontWeight='bold' padding={8}>E-Commerce Platform for XYZ Retail</DialogTitle>
                            </DialogHeader>
                            <DialogBody>
                              <Text fontWeight='medium' p={8} paddingTop={0}>
                              <b>Situation:</b> XYZ Retail, a well-established retail company, sought to expand into the e-commerce market to reach a broader audience and streamline sales processes. They needed a scalable, user-friendly platform that supported both desktop and mobile users with features like product browsing, user reviews, secure checkout, and real-time inventory updates.
                              <br />
                              <b>Task:</b> I was responsible for building both the front-end and back-end components of the platform, ensuring seamless integration with the client's inventory and payment systems. The primary goal was to create an efficient, high-performing application with a smooth user experience.
                              <br />
                              <b>Action:</b> Using React for the front-end, I designed a responsive and intuitive UI to enhance user engagement and ease of navigation. For the back-end, I developed RESTful APIs with Node.jsand MongoDB for robust data management. Additionally, I integrated the platform with AWS to optimize load times and set up a CI/CD pipeline for efficient deployment and testing. Collaboration with designers and QA ensured adherence to usability and accessibility standards.
                              <br />
                              <b>Result:</b> The project was completed on time, resulting in a 35% increase in online sales within the first three months. User feedback highlighted the site's speed and ease of use, while the client reported a substantial reduction in manual inventory management tasks.
                              </Text>
                            </DialogBody>
                        </DialogContent>
                    </Box>
                </DialogRoot>

                <DialogRoot scrollBehavior='inside' size='md'>
                    <Box maxW="xs" backgroundColor='black' marginTop={30} marginLeft={30}>
                        <img src="https://i.pinimg.com/736x/67/dc/f2/67dcf29eab20348e1cf01fb32df18f75.jpg" alt="post1" />
                        <Text fontWeight='medium' color='white' margin={2.5}>
                        Social Networking App for Student
                        Technologies: React Native, Firebase
                        </Text>
                        <DialogTrigger asChild>
                            <Button variant='outline' color='white' margin={2.5}>Read More...</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle fontWeight='bold' padding={8}>Social Networking App for Student</DialogTitle>
                            </DialogHeader>
                            <DialogBody>
                              <Text fontWeight='medium' p={8} paddingTop={0} >
                              <b>Situation:</b> A startup aimed to create a social networking app specifically for college students to help them connect, collaborate, and share resources. The app needed to be engaging and secure, providing features like user profiles, event management, and real-time messaging.
                              <br />
                              <b>Task:</b> I was tasked with developing the app's core features, focusing on creating an engaging user experience and ensuring data security. This included implementing user authentication, profile management, and a chat system.
                              <br />
                              <b>Action:</b> Using React Native, I developed a cross-platform mobile application to ensure compatibility with both iOS and Android devices. I implemented Firebase for real-time data synchronization and user authentication. For the chat system, I integrated WebSocket for real-time communication. I also worked on the app's UI/UX design to make it visually appealing and easy to navigate.
                              <br />
                              <b>Result:</b> The app received positive feedback from users for its seamless performance and user-friendly interface. It achieved over 10,000 downloads within the first month of launch, and users reported improved communication and collaboration on campus.
                              </Text>
                            </DialogBody>
                        </DialogContent>
                    </Box>
                </DialogRoot>

                <DialogRoot scrollBehavior='inside' size='md'>
                    <Box maxW="xs" backgroundColor='black' marginTop={30} marginLeft={30}>
                        <img src="https://i.pinimg.com/736x/e9/8e/5c/e98e5ca02377481977c4f6dcaff12ec9.jpg" alt="post1" />
                        <Text fontWeight='medium' color='white' margin={2.5}>
                        Health and Fitness Tracking Application
                        Technologies: React Native, Firebase
                        </Text>
                        <DialogTrigger asChild>
                            <Button variant='outline' color='white' margin={2.5}>Read More...</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle fontWeight='bold' padding={8}>Social Networking App for Student</DialogTitle>
                            </DialogHeader>
                        
                            <DialogBody>
                              <Text fontWeight='medium' p={8} paddingTop={0} >
                              <b>Situation:</b> A health and fitness company wanted to create a mobile application that allowed users to track their workouts, monitor their progress, and receive personalized fitness recommendations. The app needed to be interactive and provide real-time data analysis.
                              <br />
                              <b>Task:</b> I was responsible for developing the application’s key features, including workout tracking, progress monitoring, and personalized recommendations based on user data. Ensuring data accuracy and user privacy was also a top priority.
                              <br />
                              <b>Action:</b> I used React Native to build a cross-platform mobile app, ensuring it was available on both iOS and Android. For data storage and retrieval, I integrated Firebase, providing real-time updates and secure user authentication. I implemented an algorithm to analyze user data and generate personalized fitness recommendations. The app's UI was designed to be intuitive and motivational, encouraging users to stay active and track their progress.
                              <br />
                              <b>Result:</b> The application saw a high user engagement rate, with users frequently logging their workouts and tracking their progress. It was featured in several health and fitness blogs, leading to a 20% increase in downloads each month. User feedback highlighted the app's ease of use and the effectiveness of personalized recommendations.
                              </Text>
                            </DialogBody>
                        </DialogContent>
                    </Box>
                </DialogRoot>

                <DialogRoot scrollBehavior='inside' size='md'>
                    <Box maxW="xs" backgroundColor='black' marginTop={30} marginLeft={30}>
                        <img src="https://i.pinimg.com/736x/b7/59/a8/b759a8ef753e9cc9289f843ac915a9ee.jpg" alt="post1" />
                        <Text fontWeight='medium' color='white' margin={2.5}>
                        Educational Platform for Online Course
                        Technologies: React, Node.JS, Express
                        </Text>
                        <DialogTrigger asChild>
                            <Button variant='outline' color='white' margin={2.5}>Read More...</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle fontWeight='bold' p={8}>Educational Platform for Online Course</DialogTitle>
                            </DialogHeader>
                        
                            <DialogBody>
                              <Text fontWeight='medium' p={8} paddingTop={0}>
                              <b>Situation:</b> An educational institution aimed to create an online platform to offer courses to students worldwide. The platform needed to support features like video lectures, quizzes, discussion forums, and progress tracking to enhance the learning experience.
                              <br />
                              <b>Task:</b> My role was to develop the platform’s front-end and back-end, ensuring it could handle a large number of users simultaneously and provide a seamless learning experience. Key features included user registration, course management, and interactive content delivery.
                              <br />
                              <b>Action:</b> I built the front-end using React, focusing on creating a responsive and accessible UI. For the back-end, I used Node.jsand Express to develop APIs for user management, course content delivery, and progress tracking. I also integrated a video streaming service to handle lecture content. To support real-time interactions, I implemented WebSocket for discussion forums and live quizzes.
                              <br />
                              <b>Result:</b> The platform successfully launched, attracting over 50,000 registered users in the first six months. Students praised the platform for its interactive features and smooth performance. The institution reported a significant increase in course enrollments and positive feedback from both students and instructors.
                              </Text>
                            </DialogBody>
                        </DialogContent>
                    </Box>
                </DialogRoot>

            </Flex>
        </div>
    )
}






