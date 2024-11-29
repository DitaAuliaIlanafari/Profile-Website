import { Flex, HStack, Stack, Text, Box } from "@chakra-ui/react"
import { Avatar } from "@/components/ui/avatar"
import { Rating } from "@/components/ui/rating"
import style from './testimoni.module.css'

export default function Testimoni() {
  return (
    <div className={style['container']} id="testimoni">
        <h1 className={style['h1']}>Testimonials</h1>
    <Flex justify='center' paddingTop={10}> 
        <Box border='1px solid black' borderRadius={25} padding={10}>
            <Stack maxW="320px" gap="4" fontFamily='Sora'>
            <HStack gap="4">
              <Avatar
                name="John Smith"
                src="https://randomuser.me/api/portraits/men/70.jpg"
              />
              <Stack textStyle="sm" gap="0">
                <Text fontWeight="medium">John Smith</Text>
                <Text color="fg.muted">CEO of XYZ Retail</Text>
              </Stack>
            </HStack>
              <Rating colorPalette="orange" readOnly size="xs" defaultValue={5} />
              <Text>
              "Working with Diana was an absolute pleasure. Their expertise in developing our e-commerce platform was evident from the start. The final product exceeded our expectations, and we saw a 35% increase in online sales within the first three months. Their attention to detail and commitment to deadlines were exceptional."
              </Text>
            </Stack>
        </Box>

        <Box border='1px solid black' borderRadius={25} padding={10} marginLeft={10}>
            <Stack maxW="320px" gap="4" fontFamily='Sora'>
            <HStack gap="4">
              <Avatar
                name="Emily Brown"
                src="https://img.freepik.com/free-photo/professional-asian-businesswoman-gray-blazer_53876-105180.jpg?uid=R175953268&ga=GA1.1.1807638549.1732421243&semt=ais_hybrid"
              />
              <Stack textStyle="sm" gap="0">
                <Text fontWeight="medium">Emily Brown</Text>
                <Text color="fg.muted">Team Lead at Tech Innovators Inc</Text>
              </Stack>
            </HStack>
              <Rating colorPalette="orange" readOnly size="xs" defaultValue={5} />
              <Text>
              "Collaborating with Diana on several high-stakes projects has been a highlight of my career. Their ability to lead a team while maintaining a clear vision for the project is truly impressive. Their technical skills and problem-solving abilities have been pivotal in delivering successful outcomes."
              </Text>
            </Stack>
        </Box>

        <Box border='1px solid black' borderRadius={25} padding={10} marginLeft={10}>
            <Stack maxW="320px" gap="4" fontFamily='Sora'>
            <HStack gap="4">
              <Avatar
                name="Michael Carter"
                src="https://img.freepik.com/free-photo/young-employee-enjoying-sunny-day_23-2147562347.jpg?uid=R175953268&ga=GA1.1.1807638549.1732421243&semt=ais_hybrid"
              />
              <Stack textStyle="sm" gap="0">
                <Text fontWeight="medium">Michael Carte</Text>
                <Text color="fg.muted">Project Manager at Web Solution Ltd.</Text>
              </Stack>
            </HStack>
              <Rating colorPalette="orange" readOnly size="xs" defaultValue={5} />
              <Text>
              "Working with Diana was a seamless experience. Their proactive approach and attention to detail ensured that our projects were completed on time and to a high standard. Their contributions, especially on the real-time chat application, significantly improved our user engagement metrics."
              </Text>
            </Stack>
        </Box>
    </Flex>

    <Flex justify='center' paddingTop={10}> 
        <Box border='1px solid black' borderRadius={25} padding={10}>
            <Stack maxW="320px" gap="4" fontFamily='Sora'>
            <HStack gap="4">
              <Avatar
                name="Sophie Miller"
                src="https://img.freepik.com/free-photo/beautiful-working-women-show-their-emotions-with-facial-expressions-gestures_1150-22947.jpg?uid=R175953268&ga=GA1.1.1807638549.1732421243&semt=ais_hybrid"
              />
              <Stack textStyle="sm" gap="0">
                <Text fontWeight="medium">Sophie Miller</Text>
                <Text color="fg.muted">Senior Designer at Creative Digital Agency</Text>
              </Stack>
            </HStack>
              <Rating colorPalette="orange" readOnly size="xs" defaultValue={5} />
              <Text>
              "As a front-end developer, Diana consistently delivered pixel-perfect implementations of our designs. Their collaborative spirit and dedication to creating user-friendly interfaces greatly enhanced our projects. The redesign of our main website was a testament to their exceptional skills."
              </Text>
            </Stack>
        </Box>

        <Box border='1px solid black' borderRadius={25} padding={10} marginLeft={10}>
            <Stack maxW="320px" gap="4" fontFamily='Sora'>
            <HStack gap="4">
              <Avatar
                name="David Kim"
                src="https://img.freepik.com/free-photo/smiling-handsome-businessman-suit-standing-with-arms-folded_171337-8370.jpg?uid=R175953268&ga=GA1.1.1807638549.1732421243&semt=ais_hybrid"
              />
              <Stack textStyle="sm" gap="0">
                <Text fontWeight="medium">David Kim</Text>
                <Text color="fg.muted">Founder of College Connect</Text>
              </Stack>
            </HStack>
              <Rating colorPalette="orange" readOnly size="xs" defaultValue={5} />
              <Text>
              "We tasked Diana with creating a social networking app for college students, and they delivered a fantastic product. The app is user-friendly, secure, and perfectly meets our needs. We've received tremendous positive feedback from users, and the app has become an integral part of campus life."
              </Text>
            </Stack>
        </Box>

        <Box border='1px solid black' borderRadius={25} padding={10} marginLeft={10}>
            <Stack maxW="320px" gap="4" fontFamily='Sora'>
            <HStack gap="4">
              <Avatar
                name="Mary Johnson"
                src="https://img.freepik.com/premium-photo/beautiful-asian-woman-natural-makeup-wear-fashion-clothes-casual-dress-code-office-style_245570-588.jpg?uid=R175953268&ga=GA1.1.1807638549.1732421243&semt=ais_hybrid"
              />
              <Stack textStyle="sm" gap="0">
                <Text fontWeight="medium">Mary Johnson</Text>
                <Text color="fg.muted">Manager at FitLife Health</Text>
              </Stack>
            </HStack>
              <Rating colorPalette="orange" readOnly size="xs" defaultValue={5} />
              <Text>
              "I highly recommend Diana for their outstanding work on our health and fitness tracking application. They developed a comprehensive solution that our users love. The personalized recommendations and real-time tracking features have been a game-changer for our community. Their professionalism and dedication are unmatched."
              </Text>
            </Stack>
        </Box>
    </Flex>
    </div>
  )
}
