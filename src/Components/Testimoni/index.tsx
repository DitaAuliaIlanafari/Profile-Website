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

    </div>
  )
}
